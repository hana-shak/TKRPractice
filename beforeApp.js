import { React }from 'react';
import { StrictMode } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';
import { Provider ,  ReactReduxContext,  useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './src/redux/counter';
import  store  from './src/redux/store';




const BeforeApp = () =>{ 
  // const [counter,setCounter] = useState('0');
  //using react hook useSelector which says, hey i wanna this state from that reducer
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  
  // const { count } = store.useSelector(state=>state.counter)
  // console.log('useSelector(state=>state.counter)',useSelector(state=>state.counter))

  return(
    <>
  
    <View style={styles.container}>
      <Text>Counter Redux Totourial Practicing</Text>
      <Text>{count}</Text>
      <Button title="increment" onPress={()=> dispatch(increment())} />
      <Button title="decrement" onPress = {()=> dispatch(decrement())} />
      <StatusBar style="auto" />
   </View>
  
  </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default  BeforeApp; 


