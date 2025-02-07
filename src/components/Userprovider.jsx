import React, { createContext, useContext, useState } from "react";

export const userContext = createContext();

const Userprovider = ({children}) => {
    const [user, setUser] = useState("People");

    return <userContext.Provider value={{ user, setUser }}>{children}</userContext.Provider>;
};

export const useUser = () => {
    return useContext(userContext);
};

export default Userprovider;