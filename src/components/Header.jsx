import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log("Sign out successful");
            })
            .catch(error => {
                console.log(error);
            });
    };

    // Highlight style function
    const getNavLinkClass = ({ isActive }) =>
        isActive
            ? 'btn btn-outline bg-blue-700 text-white border-green-600 font-bold'
            : 'btn btn-outline btn-primary';

    const links = (
        <>
            <li>
                <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/allgroup" className={getNavLinkClass}>All Groups</NavLink>
            </li>

            {user && (
                <>
                    <li>
                        <NavLink to="/creategroup" className={getNavLinkClass}>Create Group</NavLink>
                    </li>
                    <li>
                        <NavLink to="/mygroup" className={getNavLinkClass}>My Group</NavLink>
                    </li>
                </>
            )}
        </>
    );

    return (
        <div className="navbar bg-green-400 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-10">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="font-bold text-2xl text-blue-700">HobbyHub</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal space-x-2 text-xl">
                    {links}
                </ul>
            </div>

            <div className="navbar-end space-x-2">
                {user ? (
                    <>
                        <span>{user.email}</span>
                        <div className="relative w-10 h-10">
                            <img
                                className="rounded-full w-full h-full"
                                alt="user avatar"
                                src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                            />
                        </div>
                        <button onClick={handleSignOut} className="btn btn-outline btn-primary">Log Out</button>
                    </>
                ) : (
                    <Link className="btn btn-outline btn-primary" to="/login">Login</Link>
                )}
            </div>
        </div>
    );
};

export default Header;
