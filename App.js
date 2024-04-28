import React from "react";
import RootNavigation from "./src/navigation/RootNavigation";
import {Provider} from 'react-redux'
import { Store } from "./src/redux/Store";


const App = () => {


  return (
    <Provider store ={Store}>
      <RootNavigation/>
    </Provider>
  );
};



export default App;

