import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/user';

function NameBox() {
  const user= useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout())
  }
  return (
    <div className='nameBox'>
        <h5>
        {user.name}
        </h5>
        <button onClick={(e) => handleLogout(e)}>Logout</button>
    </div>
  )
}

export default NameBox