import React, { useState,useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_ICON } from "../utils/constants";
import { BG_URL } from "../utils/constants";
const Login = () => {
  const [isSignForm, setIsSignInForm] = useState(false);
  const [errorMessage,setErrorMessage]=useState(null);
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  // const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleButtonClick=()=>{
    // validate the form data
  
    const message=checkValidData(email.current.value,password.current.value);
    // console.log(message);
    setErrorMessage(message);
      if(message) return;

  
      if(!isSignForm){
        //SignUp Logic
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // console.log(user);
    //update user profile
    updateProfile(auth.currentUser, {
  displayName: name.current.value, 
  photoURL: USER_ICON,
}).then(() => {
  // Profile updated! 
  // dispatch action
const {uid,email,displayName,photoURL}=auth.currentUser;
      dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));

    // // ...navigate
    // navigate("/browse");
}).catch((error) => {
  // An error occurred
  setErrorMessage(error.message);
});
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    setErrorMessage(errorCode+ "-" + errorMessage);
     
  });
      }
      else{
        //SignIn Logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // console.log(user.email);
    //navigate
    // navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     setErrorMessage(errorCode+ "-" + errorMessage);

  });
      }
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignForm);
  };


  return (
    <div>
      <Header />
      <div className="absolute opacity-100">
        <img className="h-screen object-cover md:w-screen"
        src={BG_URL}
          alt="bg-img"
        />
      </div>
      <form
        onSubmit={(e)=>e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-30 mx-auto right-0 left-0 text-white opacity-85 rounded-lg "
      >
        <h1 className="font-bold text-2xl md:text-4xl py-4">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignForm && (< input
        ref={name}
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 bg-gray-700 w-full"
        /> )}
        <input
        ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700 w-full"
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700  w-full"
        />
        <p className="text-red-500 font-bold p-2">{errorMessage}</p>
        <button className="p-4 my-6  bg-red-700 w-full rounded-xl font-bold hover:cursor-pointer" onClick={handleButtonClick}>
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 my-4 font-bold hover:cursor-pointer border-[0.5px] px-2"
          onClick={toggleSignInForm}
        >
          {isSignForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
