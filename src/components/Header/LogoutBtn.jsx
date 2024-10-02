import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const navigate= useNavigate()
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    }).catch((e)=>{console.log(`Header Logout button error: ${e}`)});
    navigate("/")
  };

  return <button className="  sm:text-xl inline-block px-2 sm:px-4 py-2 duration-200 hover:bg-gradient-to-r from-purple-400 via-violet-500 to-violet-400 hover:text-white rounded-2xl font-semibold text-sm" onClick={logoutHandler}>Logout</button>;
}

export default LogoutBtn;
