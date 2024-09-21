import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthLayout({ children, authenticated = true }) {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (authenticated && authStatus !== authenticated) {
      navigate("/login");
    } else if (!authenticated && authStatus !== authenticated) {
      navigate("/");
    }
    setLoader(false);
  }, [navigate, authStatus, authenticated]);


  return loader ? <h1>Loading</h1> : <>{children}</>;
}

export default AuthLayout;
