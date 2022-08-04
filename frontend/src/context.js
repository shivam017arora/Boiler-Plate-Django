import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import axiosInstance from "./axios";

const context = React.createContext(null);
const { Provider } = context;

function ContextProvider({ children }) {
  const [user, setUser] = React.useState(() =>
    localStorage.getItem("access_token")
      ? jwt_decode(localStorage.getItem("access_token"))
      : null
  );

  const loginUser = async (email, password) => {
    await axiosInstance.post("token/", { email, password }).then((res) => {
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);
      setUser(jwt_decode(res.data.access));
    });
  };

  const logoutUser = async () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setUser(null);
  };

  return (
    <Provider
      value={{
        user: user,
        login: loginUser,
        logout: logoutUser,
      }}
    >
      {children}
    </Provider>
  );
}

export { context, ContextProvider };
