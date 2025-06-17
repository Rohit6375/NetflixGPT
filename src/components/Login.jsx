import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg"
          alt="bg-img"
        />
      </div>
      <form
        action=""
        className="w-3/12 absolute p-12 bg-black my-30 mx-auto right-0 left-0 text-white opacity-85 rounded-lg "
      >
        <h1 className="font-bold text-4xl py-4">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignForm && (< input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 bg-gray-700 w-full"
        /> )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700  w-full"
        />
        <button className="p-4 my-6  bg-red-700 w-full rounded-xl">
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 my-4 font-bold cursor-pointer "
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
