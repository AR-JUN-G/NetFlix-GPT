import { useState,useRef } from "react";
import Header from "./Header"
import { validateSignUpDetails } from "../utils/validate";
import { auth } from "../utils/fireBase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const [isSignInForm,setIsSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState("");
    const email=useRef(null);
    const password=useRef(null);
    const navigate=useNavigate();
    
    const handleSubmit=()=>{
        const message=validateSignUpDetails(email.current.value,password.current.value);    
        setErrorMessage(message);
        if(message!== null) return;
        else if(!isSignInForm){
            console.log(email.current.val);
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value).then((userCredential) => 
                { 
                    const user = userCredential.user;
                    navigate("/browse");

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(`${errorCode} - ${errorMessage}`);
                });
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value,password.current.value).then((userCredential) => { 
                    const user = userCredential.user;
                    navigate("/browse");
                })
                .catch((error) => {
                 const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(`${errorCode} - ${errorMessage}`);  
        });
        }

    }
    const handleSignUpClick=()=>{
        setIsSignInForm(!isSignInForm);
    }
    return(
    <>
        <div >
            <Header/>
            <img className="absolute" src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg" alt="BannerLogo"/>
            <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 p-14 absolute bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 ">
                <h1 className="font-bold text-3xl py-4 ">{isSignInForm?"Sign In":"Sign Up"}</h1>
                <p className="text-red-500">{errorMessage?errorMessage:""}</p>
                {!isSignInForm?<input type="text" placeholder="FullName" className="p-2 my-4 w-full rounded-sm bg-gray-700"/>:""}
                <input  ref={email} type="text" placeholder="Email Address" className="p-2 my-4 w-full rounded-sm bg-gray-700 "/>
                <input ref={password} type="password" placeholder="Password" className="p-2 my-4 w-full rounded-sm bg-gray-700"/>
                <button onClick={handleSubmit} className="p-2 my-6 bg-red-700 w-full rounded-sm" >Submit</button>
                <p className="cursor-pointer" onClick={handleSignUpClick}>{isSignInForm?"New to Netflix? Sign up now.":"Already an User Sign in now."}</p>
            </form>
        </div>
    </>)
}

export default Login;