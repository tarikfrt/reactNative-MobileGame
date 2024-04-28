import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { db } from '../../firebaseConfig'
import { collection, query, where, getDocs } from 'firebase/firestore'

export const login = createAsyncThunk('user/login', async ({ email, password }) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password)

    const user = userCredential.user;
    const token = user.stsTokenManager.accessToken;

    const userData = {
      token,
      user: user,
    }

    // Fetch additional user data from the database and update the state
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("userEmail", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        userData.userName = doc.data().userName;
        userData.email = doc.data().userEmail;
      });
    }

    return userData;
  } catch (error) {
    console.log('userSlice line 21:', error)
    throw error
  }
})

// Define initial state
const initialState = {
  email: null,
  userName: null,
  password: null,
  isLoading: false,
  isAuth: false,
  token: null,
  user: null,
  error: null,
  users: {
    userName: "trkfrt",
    userPassword: "1234"
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setUserName: (state, action) => {
      state.userName = action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setLogin: (state) => {
      if ((state.userName === state.users.userName) &&
        (state.password === state.users.userPassword)) {
        console.log(true)
        state.isAuth = true
      } else {
        console.log(false)
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
        state.isAuth = false
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isAuth = true
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.userName = action.payload.userName; // Update userName in state
        state.email = action.payload.email; // Update email in state
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isAuth = false
        state.error = action.error.message;
      })
  }
})

export const { setEmail, setUserName, setPassword, setIsLoading, setLogin } = userSlice.actions
export default userSlice.reducer;
