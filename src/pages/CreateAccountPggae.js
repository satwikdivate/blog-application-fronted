import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function CreateAccountPggae() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const createAccount=async()=>{

    try{
        console.log(password,"   ",confirmPassword)
        if(password!==confirmPassword){

            setError("Password and confirm paswword not match")
            return ;
        }

        await createUserWithEmailAndPassword(getAuth(),email,password);
        toast.success("Signup Completed");
        navigate("/articles")
    }catch(e){
        setError(e.message);
    }
  }
  return (
    <>
      <h1>Create Account</h1>
      {error && <p className="error">{error}</p>}

      <input
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <input
        placeholder="Re Enter your Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
      />
      <button onClick={createAccount}>Create Account</button>
      <Link to="/login">Already Have account</Link>
    </>
  );
}

export default CreateAccountPggae;
