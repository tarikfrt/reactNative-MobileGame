import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {HomePage,ProfilePage,OfflineGamePage,OnlineGamePage,FiveLetter,SixLetter,SevenLetter} from "../screens/indexs"


const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Profile" component={ProfilePage} />
      <Stack.Screen name="OnlineGamePage" component={OnlineGamePage}/>
      <Stack.Screen name="OfflineGamePage" component={OfflineGamePage}/>
      <Stack.Screen name="FiveLetter" component={FiveLetter} />
      <Stack.Screen name="SixLetter" component={SixLetter} />
      <Stack.Screen name="SevenLetter" component={SevenLetter} />
    </Stack.Navigator>
  )
}

export default UserStack

