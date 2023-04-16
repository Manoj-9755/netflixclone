import React from 'react'
import { useSelector } from 'react-redux'
import { selectCount } from './features/counter/counterSlice'
import Nav from './nav'
import './profile.scss'
import { auth } from "./firebase";
import Planscreen from './planscree'


const Profile = () => {
    const user=useSelector(selectCount)
  return (
    <div className='profile'>
        <Nav/>
        <div className="profilebody">
            <h1>
              Edit profile  
            </h1>
            <div className="profileinfo">
                <img className='img' src="https://th.bing.com/th?id=OIP.XQ-com-ULw7aaf_U3BcQ3AHaHa&w=226&h=226&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
                <div className="profile-detail">
                   <h2>{user.email}</h2> 
                   <div className="profile-plan">
                    <h3>plans</h3>
                    <Planscreen/>
                    <button onClick={()=>auth.signOut()} className='profile-signout'>signout</button>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile