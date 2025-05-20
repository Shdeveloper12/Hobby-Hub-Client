import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const Header = () => {
    const { user, signOutUser } = use(AuthContext);
    console.log('nav', user)

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log("sign out succesfully")
            })
            .catch(error => {
                console.log(error);
            })
    }


    const links =
        <>
            <li><NavLink className='btn btn-outline' to='/'>Home</NavLink></li>
            <li ><NavLink className='btn btn-outline' to='/allgroup'>All Group</NavLink></li>

            {user && <>

                <li><NavLink className='btn btn-outline ' to='/creategroup'>Create Group</NavLink></li>
                <li><NavLink className='btn btn-outline  ' to='/mygroup'>My Group</NavLink></li>
            </>

            }
        </>

    return (
        <div className="navbar bg-green-400 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="font-bold text-2xl ">HobbyHub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  space-x-2 text-xl">

                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-2">


                {user ?
                    <>
                        <span>{user.email}</span>

                        <div className="relative w-10 h-10 ">
                            <img className='rounded-full w-full h-full'
                                alt="user avater"
                                src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                        </div>
                        <a onClick={handleSignOut} className="btn btn-outline ">Log Out</a>
                    </>
                    : <Link className='btn btn-outline' to='/login'>Login</Link>}

            </div>
        </div>
    );
};

export default Header;