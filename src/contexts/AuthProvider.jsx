import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase.init';
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';

const authProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [Loading, setLoading] = useState(true);

    // ✅ Create user with displayName and photoURL
    const createUser = (email, password, name, photoURL) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const defaultPhoto = photoURL;
                return updateProfile(userCredential.user, {
                    displayName: name,
                    photoURL: photoURL
                }).then(() => {
                    // Manually update user state after profile update
                    setUser({
                        ...userCredential.user,
                        displayName: name,
                        photoURL: defaultPhoto
                    });
                    return userCredential;
                });
            });
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, authProvider);
    };

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unSubscribe();
    }, []);

    const userInfo = {
        user,
        Loading,
        createUser,    
        signInUser,
        googleSignIn,
        signOutUser,
        setUser
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
