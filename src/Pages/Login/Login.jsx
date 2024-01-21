import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

    const { signin } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)

    const hendelLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)
        signin(email, password)
            .then(result => {
                console.log(result)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error)
            })
    }
    const notify = () => toast("Wow so easy!");

    
    return (
        <div className="bg-login-img bg-cover h-screen">
            <Header></Header>
            <div className="mt-32">
                <h2 className="text-4xl  text-center mb-7 font-extrabold">Please <span className="text-blue-700"> Login</span></h2>
                <form onSubmit={hendelLogin} className="card-body  md:w-3/4 bg-slate-500 bg-opacity-50 border-double border-8 border-slate-800  mx-auto lg:w-2/4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white passwordext-white mx-28">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input w-[500px] mx-auto input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white mx-28">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input w-[500px] mx-auto input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link text-white mx-auto mt-3 text-sm link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-2">
                        <button onClick={notify} className=" h-10 w-48 mx-auto btn text-xl    bg-blue-200 hover:bg-blue-400 text-white">Login</button>
                        <ToastContainer/>
                    </div>
                    <p className="text-center text-white">You do not have an acount please <Link className="text-blue-700 font-bold " to={'/register'}>Register</Link></p>
                </form>
            </div>
        </div>
    )
}