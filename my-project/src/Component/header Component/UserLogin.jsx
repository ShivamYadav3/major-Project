// import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebaseConfig/firebaseConfiguration";
import { useState } from "react";
import { Link } from "react-router-dom";
const auth = getAuth(app);

 function UserLogin() {
    const[userData,setUserData]=useState({
        email:"",
        password:"",
    })

    // -------------------------------------------------
   function handleChange(e){
   const{name,value}=e.target
   setUserData((pre)=>({
 ...pre,[name]:value
   }))
   }


function handleSubmit(e){
    e.preventDefault()
    signInWithEmailAndPassword(auth, userData.email, userData.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("sucess")
    console.log("login sucess",user)
    // ...
  })
  .catch((error) => {
    alert("There is no user register with such email and Pass ", error.message)
    // const errorCode = error.code;
    // const errorMessage = error.message;
  });
}
    // ------------------------------------------------------
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   Sign in
                </h1>
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={userData.email}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            onChange={handleChange}
                            value={userData.password}
                            name="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Dont have an account?{" "}
                    <Link to="/sign-up"
                       
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}
export default UserLogin