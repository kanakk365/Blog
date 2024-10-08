import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import appwriteService from "../appwrite/auth";
import { login, logout } from "../store/authSlice";
import { Footer, Header } from "../components";
import { Outlet } from "react-router-dom";

function Layout() {
 
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
      appwriteService
        .getCurrentUser()
        .then((userData) => {
          if (userData) {
            dispatch(login({ userData }));
          } else {
            dispatch(logout());
          }
        })
        .finally(() => setLoading(false));
    }, []);
  
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  ) : null;
}

export default Layout;
