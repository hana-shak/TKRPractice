import { React }from 'react';
import {Provider } from 'react-redux'
import BeforeApp from './beforeApp';
import store from './src/redux/store'


export default function App (){ 
  
  return(
    <Provider store={store}>
      <BeforeApp />
    </Provider>
  )
};





