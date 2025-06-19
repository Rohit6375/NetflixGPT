import React, {useEffect} from "react";



import { useDispatch, useSelector } from "react-redux";

import {  useNavigate } from 'react-router-dom';
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store=>store.user);
  const dispatch=useDispatch()
  const handleSignOut=()=>{
    signOut(auth).then(() => {
  // Sign-out successful. navigate to login page 
  navigate("/");
  
}).catch((error) => {
  // An error happened.
  navigate("/error");
});
  };
  useEffect(()=>{
 const unsubscribe=onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    // const uid = user.uid;
    const {uid,email,displayName,photoURL}=user;
    // console.log(user); // printed twice
    // ...update store
    dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
    // redirect user to browse page (logic is inside login page navigate)
   
navigate("/browse");
  } else {
    // User is signed out
    // ...

    dispatch(removeUser());
    
    // redirect user to login page (logic is inside login page navigate)
    navigate("/");

  }
});
return ()=> unsubscribe();
},[]);
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between  w-screen">
      <img className="w-44" src={LOGO_URL} alt="logo" />
     {user && <div className="flex p-3">
<img className="w-12 h-12" src={user?.photoURL} alt="user-logo"></img>
      
      <button  onClick={handleSignOut} className="font-bold cursor-pointer text-white p-2">Sign Out</button>
      </div>} 
      
    </div>
  );
};

export default Header;
