// import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../firebaseConfig/firebaseConfiguration";
import { setIsLogin } from "./PartnerLoginForm/UserLoginSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);
function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  signOut(auth)
    .then(() => {
      alert("Logout Successfully");
      dispatch(setIsLogin(false));
      navigate("/");
    })
    .catch((error) => {
      alert("Something wrong during Logout ");
      console.log("logout", error);
    });
  return <div></div>;
}

export default Logout;
