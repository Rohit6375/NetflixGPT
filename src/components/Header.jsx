import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful. navigate to login page
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        const { uid, email, displayName, photoURL } = user;
        // console.log(user); // printed twice
        // ...update store
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
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
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick=()=>{
    //toggle gpt search
    dispatch(toggleGptSearchView());

  }

  const handleLanguageChange=(e)=>{
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between  w-screen">
      <img className="w-44" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex p-3">
         {showGptSearch && <select className="text-white p-3 bg-gray-900 m-2 font-bold rounded-xl" onChange={handleLanguageChange}> language
            {SUPPORTED_LANGUAGES.map(lang=>  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
           
           
          </select>}
          <button className="bg-purple-800/70 py-2 px-4 mx-4 m-2 text-white rounded-lg font-bold hover:cursor-pointer hover:bg-purple-900/70 " onClick={handleGptSearchClick}>
            {showGptSearch ? "Homepage" :"GPT Search"}
          </button>

          <img className="w-12 h-12" src={user?.photoURL} alt="user-logo"></img>

          <button
            onClick={handleSignOut}
            className="font-bold cursor-pointer text-white p-2"
          >
            {user.displayName}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
