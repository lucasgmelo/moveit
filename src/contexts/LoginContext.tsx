import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface LoginContextData {
    login: string;
    setLogin(value: string): void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const LoginContext = createContext({} as LoginContextData);


export function CountdownProvider({children}: CountdownProviderProps) {
    const [login, setLogin] = useState(null);
    
    return (
        <LoginContext.Provider value={{
            login,
            setLogin,
        }}>
            {children}
        </LoginContext.Provider>
    )
}