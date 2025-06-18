import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter,RouterProvider, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
const Body = () => {

  const dispatch=useDispatch()
  
     
    const appRouter=createBrowserRouter([
        {
            path: "/",
            element:<Login/>
        },
        {
            path: "/browse",
            element:<Browse/>
        }
    ]);
useEffect(()=>{
 onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    // const uid = user.uid;
    const {uid,email,displayName,photoURL}=user;
    // console.log(user); // printed twice
    // ...update store
    dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
    // redirect user to browse page (logic is inside login page navigate)
   

  } else {
    // User is signed out
    // ...
    dispatch(removeUser());
    // redirect user to browse page (logic is inside login page navigate)
  }
});
},[]);
   
  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body