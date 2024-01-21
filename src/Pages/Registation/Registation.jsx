import { Link } from "react-router-dom"
import Header from "../Shared/Header/Header"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


export default function Registation() {

    const { createUser } = useContext(AuthContext)

    const hendelRegistation = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const phone = form.get('phone');
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password)

        createUser(email, password)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
        console.log(user)
    }


    return (
        <div>
            <Header></Header>
            <div className="mt-2">
                <h2 className="text-4xl  text-center mb-7 font-bold">please Registation</h2>
                <form onSubmit={hendelRegistation} className="card-body  bg-register-img bg-cover   md:w-3/4 bg-black bg-opacity-25 rounded-t-[50px]  mx-auto lg:w1/2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white passwordext-white mx-72">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered w-1/2 mx-auto" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white passwordext-white mx-72">Phone</span>
                        </label>
                        <input type="text" name="phone" placeholder="Phone" className="input input-bordered w-1/2 mx-auto" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white passwordext-white mx-72">email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered w-1/2 mx-auto" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white mx-72">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered w-1/2 mx-auto" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link mx-auto  mt-2 text-white link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control ">
                        <button className="btn w-48 mx-auto btn-primary">Registation</button>
                    </div>
                    <p className="text-center  text-white">You  have an acount please <Link className="text-blue-600 font-bold " to={'/login'}>Login</Link></p>
                </form>
            </div>
        </div>
    )
}