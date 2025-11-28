import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(() => {
        return localStorage.getItem('token') || null;
    })

    const Login = (username, password) => {
        if(username === 'admin' && password === '1234') {
            const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30';
            setToken(TOKEN);

            localStorage.setItem('token', TOKEN);
            return true;
        }
        return false;
    }

    const LogOut = () => {
        setToken(null);
        localStorage.removeItem('token');
    }

    return(
        <AuthContext.Provider value={{ token, Login, LogOut }}>
            {children}
        </AuthContext.Provider>
    )
}