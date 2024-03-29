import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function LoginPage() {
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState('');
    const navigate=useNavigate();
    const login=async()=>{
        try{

            await signInWithEmailAndPassword(getAuth(),email
            ,password);
            navigate("/articles");
            toast.success("Login Successfully")
        }catch(e){
            setError(e.message);
        }
    }

  return (
    <>

    <h1>LoginPage</h1>
    {error && <p className='error'>{error}</p>}

    <input placeholder='Your email address'  value={email} onChange={e=>setEmail(e.target.value)}/>

    <input placeholder="Your Password" value={password} onChange={e=>setPassword(e.target.value)}type='password'/>
    <button onClick={login}>Login In</button>
    <Link to="/create-account">Don't have a account  </Link>
    </>
  )
}

export default LoginPage