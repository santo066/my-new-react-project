import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../../../AuthProvider/AuthProvider"

export default function Header() {

    const { user, Logout } = useContext(AuthContext)

    const hendelSignout = () => {
        Logout()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }



    const Item = <>

        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/user'}>User</NavLink></li>
        <li><NavLink to={'/login'}>Login</NavLink></li>
        <li><NavLink to={'/register'}>Registation</NavLink></li>

    </>


    return (
        <div className="navbar bg-blue-200 bg-opacity-45">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu text-blue-800 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            Item
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost ml-16 text-xl">Social</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-blue-800 menu-horizontal px-1">
                    {
                        Item
                    }
                </ul>
            </div>
            <div className="navbar-end mr-20">
                {
                    user ?
                        <button onClick={hendelSignout} className="btn btn-primary">Log out</button>
                        :
                        <button className="btn btn-primary"><Link to={'/login'}>Login</Link></button>


                }

            </div>
        </div>
    )
}