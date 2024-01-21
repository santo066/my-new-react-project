import { useContext } from "react";
import Header from "../Shared/Header/Header";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function User() {
    const { user } = useContext(AuthContext)
    console.log(user)
    const { email, uid,metadata } = user
    const data=metadata.lastLoginAt;
    console.log(data)
    return (
        <div>
            <Header></Header>
            <h2 className="text-2xl">{email}</h2>
            <h2 className="text-2xl">{uid}</h2>
        </div>
    )
}