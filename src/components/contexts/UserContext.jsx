import { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

const getInitialState = () => {
  const currentUser = localStorage.getItem('username')
  return currentUser ? JSON.parse(currentUser) : null
}

export const UserProvider = ({ children }) => {
  const [currentUser, setUser] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("username", JSON.stringify(currentUser))
  },[currentUser])

  return (
    <UserContext.Provider value={{ currentUser, setUser }}>
      {children}
    </UserContext.Provider>
  );
};