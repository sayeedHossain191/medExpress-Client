import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Link } from "react-router-dom"

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }


    return (
        <div>
            {/* <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
                <div className='flex-1'>
                    <Link to='/' className='flex gap-2 items-center'>
                        <img className='w-auto h-7' src='' alt='' />
                        <span className='font-bold'>SoloSphere</span>
                    </Link>
                </div>
                <div className='flex-none'>
                    <ul className='menu menu-horizontal px-1'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/services'>Services</Link>
                        </li>
                        <li>
                            <details>
                                <summary>
                                    Parent
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>

                        {!user && <li>
                            <Link to='/login'>Login</Link>
                        </li>}
                    </ul>

                    {user &&
                        <div className='dropdown dropdown-end z-50'>
                            <div
                                tabIndex={0}
                                role='button'
                                className='btn btn-ghost btn-circle avatar'
                            >
                                <div title={user?.displayName} className='w-10 rounded-full'>
                                    <img
                                        referrerPolicy='no-referrer'
                                        alt='User Profile Photo'
                                        src={user?.photoURL}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                            >

                                <li className='mt-2'>
                                    <button onClick={logOut} className='bg-gray-200 block text-center'>Logout</button>
                                </li>
                            </ul>
                        </div>}
                </div>
            </div> */}


            <div className="navbar bg-base-100 container px-4 mx-auto font-poppins">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/services'>Services</Link>
                            </li>
                            {
                                user && <li>
                                    <a>Dashboard</a>
                                    <ul className="p-2">
                                        <li>
                                            <Link to='/addService'>Add Service</Link>
                                        </li>
                                        <li><a>Manage Service</a></li>
                                        <li><a>Booked-Services</a></li>
                                        <li><a>Service-To-Do</a></li>
                                    </ul>
                                </li>
                            }

                        </ul>
                    </div>
                    <div className='flex-1'>
                        <Link to='/' className='flex gap-2 items-center'>
                            <img className='w-auto h-7' src='' alt='' />
                            <span className='font-bold'>SoloSphere</span>
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/services'>Services</Link>
                        </li>
                        {
                            user && <li className="z-50">
                                <details>
                                    <summary>Dashboard</summary>
                                    <ul className="p-2 w-full">
                                        <li>
                                            <Link to='/addService'>Add Service</Link>
                                        </li>
                                        <li><a>Manage Service</a></li>
                                        <li><a>Booked-Services</a></li>
                                        <li><a>Service-To-Do</a></li>
                                    </ul>
                                </details>
                            </li>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <>
                                <span className=""><img src={user?.photoURL} title={user?.displayName} className=" ml-5 h-10 rounded-full" alt="" /></span>
                                <button onClick={handleLogOut} className="btn btn-ghost normal-case text-lg">Log Out</button>
                            </>
                            :
                            <>
                                <Link to='/login' className="btn btn-ghost normal-case text-lg">Login</Link>
                            </>
                    }

                </div>
            </div>
        </div>


    )
}

export default Navbar
