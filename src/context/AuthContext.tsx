
import { useContext, createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from "../api/firebase.config";
import React from 'react';

interface AuthContextProps {
    googleSignIn: () => any;
    logOut: () => any;
    user: any | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState<null | {} >({});

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

    const logOut = () => {
        signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unSubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("UserAuth must be used within a AuthContextProvider");
    return context;
};
