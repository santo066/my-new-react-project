import { createContext, useEffect, useState } from "react"
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);


export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)

    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const Logout = () => {
        setloading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const UnSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("fadlkjnhsdkfjasdjkf", currentUser)
            setUser(currentUser)
            setloading(false)
        })
        return () => {
            UnSubscribe();
        }
    }, [])

    const authInfo = {
        createUser,
        signin,
        Logout,
        user,
        loading,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    )
}