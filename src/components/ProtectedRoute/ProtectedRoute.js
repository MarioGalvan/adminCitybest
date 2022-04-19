import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const history = useHistory();

  const [isAuthenticaded, setisAuthenticaded] = useState({
    auth: false,
    redirect: window.location.pathname,
  });

  useEffect(() => {
    if (Cookies.get("authenticated")) {
      setisAuthenticaded({
        auth: true,
        redirect: window.location.pathname,
      });
    } else {
      setisAuthenticaded({
        auth: false,
        redirect: "/sign-in",
      });
    }
  }, []);

  // console.log("userAuhtenticated", isAuthenticaded);
  useEffect(() => {
    return history.listen((location) => {
        if (Cookies.get("authenticated")) {
            setisAuthenticaded({
              auth: true,
              redirect: window.location.pathname,
            });
          } else {
            setisAuthenticaded({
              auth: false,
              redirect: "/sign-in",
            });
          }
    });
  }, [history]);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticaded.auth ? (
          <Component {...props} />
        ) : (
          <Redirect to={isAuthenticaded.redirect} />)
      }
    />
  );
}
export default ProtectedRoute;
