import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvder = new GoogleAuthProvider();
    const signInUsingGooogle = () => {
        return signInWithPopup(auth, googleProvder)
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])

    const handleEmailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    return {
        user,
        signInUsingGooogle,
        logOut,
        handleEmailLogin
    }
}
export default useFirebase;