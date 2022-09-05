import React from 'react'
import { auth, provider} from '../../firebase';
import {signInWithPopup} from 'firebase/auth'
import { useNavigate} from 'react-router-dom'


function LoginGoogle() {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const result = signInWithPopup(auth,provider);
        console.log(result)
        navigate('/')
    }

  return (
    <div>
        <h1>Login with google</h1>
        <button onClick={signInWithGoogle}>Connexion</button>
    </div>
  )
}

export default LoginGoogle