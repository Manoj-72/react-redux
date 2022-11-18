import './App.css';
import React,{useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {actions} from './store/index'
import Profile from './components/Profile';
import Login from './components/Login';
import Logout from './components/Logout';
import NameBox from './components/NameBox';
import ChangeColor from './components/ChangeColor';
import { changeColor } from './features/theme';
import Switch from 'react-switch'
import { selectUser } from './features/user';

function App() {
  const dispatch = useDispatch();
  const themeColor = useSelector((state) => state.theme.value)
  const theme = useSelector((state) => state.theme.value.themeColor)
  const user = useSelector(selectUser)
  // const userName = useSelector((state) => state.user.user.name);
  // const userName  = useSelector((state) => state.user.value.name)
  // const counter = useSelector((state)=>state.counter);
  // const dispatch = useDispatch();
  // const increment = () => {
  //   dispatch(actions.increment())
  // };
  // const decrement = () => {
  //   dispatch(actions.decrement())
  // };
  // const addBy = () => {
  //   dispatch(actions.addBy(10))
  // };
  // const decBy = () => {
  //   dispatch(actions.decBy(10))
  // }
  return (
    <>
    <div className={`App row ${themeColor}`} >
    <div className='col-4 toggle'>
     <ChangeColor />
   </div>
    <div className='col-4 '> 
    {user ? <Logout/> : <Login/>}
    </div>
    <div className='col-4 '>
    { user && <NameBox />}
    </div>
    {/* <h1>Counter App</h1> 
    <h2>{counter}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={addBy}>Add By 10</button>
  <button onClick={decBy}>Dec By 10</button> */}
  </div>
  </>
  );
}

export default App;
