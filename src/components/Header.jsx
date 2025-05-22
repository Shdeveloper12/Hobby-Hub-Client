import React, { useContext, useState, } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { Typewriter } from 'react-simple-typewriter';
import img1 from '../../src/assets/images.png';

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleSignOut = () => {
        signOutUser()
            .then(() => console.log("Sign out successful"))
            .catch(error => console.log(error));
    };

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        document.documentElement.setAttribute('data-theme', newMode ? 'dark' : 'light');
    };

    const getNavLinkClass = ({ isActive }) =>
        isActive
            ? 'btn btn-outline bg-blue-700 text-white border-green-600 font-bold'
            : 'btn btn-outline btn-primary';

    const links = (
        <>
            <li><NavLink to="/" className={getNavLinkClass}>Home</NavLink></li>
            <li><NavLink to="/allgroup" className={getNavLinkClass}>All Groups</NavLink></li>
            {user && (
                <>
                    <li><NavLink to="/creategroup" className={getNavLinkClass}>Create Group</NavLink></li>
                    <li><NavLink to="/mygroup" className={getNavLinkClass}>My Group</NavLink></li>
                </>
            )}
        </>
    );

    return (
        <div className="navbar bg-green-400 shadow-sm ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu primary menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-10">
                        {links}
                    </ul>
                </div>
                <div className='flex gap-2 '>
                    <img className='w-10 hidden lg:block' src={img1} alt="" />
                    <Link to="/" className="font-bold text-2xl mt-1 text-blue-700 third ">HobbyHub</Link>
                </div>

            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu primary menu-horizontal space-x-2 text-xl">
                    {links}
                </ul>
            </div>

            <div className="navbar-end space-x-2 items-center">

                {user && (
                    <p className="text-sm font-medium hidden md:block">
                        Welcome,&nbsp;
                        <span className="text-blue-900 font-bold">
                            <Typewriter
                                words={[user.displayName || "User"]}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                                loop
                            />
                        </span>
                    </p>
                )}


                {user ? (
                    <>
                        <div className="tooltip tooltip-bottom" data-tip={user?.displayName || "No Name"}>
                            <div className="w-10 hidden lg:block md:block rounded-full overflow-hidden border border-gray-300">
                                <img
                                    src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                                    alt="user avatar"
                                />
                            </div>
                        </div>
                        <button onClick={handleSignOut} className="btn btn-outline btn-primary primary">Log Out</button>
                    </>
                ) : (
                    <Link className="btn btn-outline btn-primary primary" to="/login">Login</Link>
                )}


                <button className="btn btn-ghost" onClick={toggleDarkMode}>
                    <label className="swap swap-rotate cursor-pointer ">
                        <input type="checkbox" checked={isDarkMode} readOnly />


                        <svg
                            className="swap-off h-6 w-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Z" />
                        </svg>


                        <svg
                            className="swap-on h-6 w-6 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                </button>
            </div>
        </div>
    );
};

export default Header;
