import React from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../../firebase'
import {useAuthState} from "react-firebase-hooks/auth"
import "../../components/navbar/navbar.scss"
import { signOut } from 'firebase/auth'

function Navbar() {
    const [user] = useAuthState(auth)

    const signUserOut = async () => {
        await signOut(auth);
    };

  return (
    <div className='navbar'>
        <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        </div>
        

        <div className='user'>
            {user && (
                <>

            <p> {user?.displayName} </p>
             {/* eslint-disable-next-line */}
            <img src={user?.photoURL || "" }  />
            <button onClick={signUserOut}>Log Out</button>
            </>
            )}
        </div>
    </div>
    
  )
}

export default Navbar