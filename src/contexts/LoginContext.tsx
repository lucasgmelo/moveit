import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface LoginContextData {
    user: string;
    userData: object;
    handleUser: (params:string) => void;
    handleUserData: (params:object) => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const LoginContext = createContext({} as LoginContextData);

export function CountdownProvider({children}: CountdownProviderProps) {
    const [user, setUser] = useState('lucasgmelo');
    const [userData, setUserData] = useState({});

    function handleUser (res: string) {
        setUser(res);
    }

    function handleUserData (res: object) {
        setUserData(res);
    }
    
    return (
        <LoginContext.Provider value={{
            user,
            userData,
            handleUser,
            handleUserData,
        }}>
            {children}
        </LoginContext.Provider>
    )
}