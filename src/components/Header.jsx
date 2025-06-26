import React, { useContext, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { Typewriter } from "react-simple-typewriter";
import img1 from "../../src/assets/images.png";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleFAQClick = () => {
    if (location.pathname === "/") {
      const faqSection = document.getElementById("faq-section");
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollToFAQ: true } });
    }
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("Sign out successful"))
      .catch((error) => console.log(error));
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.setAttribute(
      "data-theme",
      newMode ? "dark" : "light"
    );
  };

  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "btn btn-outline bg-blue-700 text-white border-green-600 font-bold"
      : "btn btn-outline btn-primary";

  const links = (
    <>
      <li>
        <NavLink to="/" className={getNavLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allgroup" className={getNavLinkClass}>
          All Groups
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/creategroup" className={getNavLinkClass}>
              Create Group
            </NavLink>
          </li>
          <li>
            <NavLink to="/mygroup" className={getNavLinkClass}>
              My Group
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          
          className={getNavLinkClass({ isActive: false })}
          onClick={handleFAQClick}
        >
          FAQ
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar px-6 bg-green-400 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu primary menu-sm dropdown-content mt-3 ml-[-20px] w-52 p-2 shadow bg-base-100 rounded-box z-10"
          >
            {links}
          </ul>
        </div>
        <div className="flex gap-2">
          <img className="w-10 hidden lg:block" src={img1} alt="logo" />
          <Link to="/" className="font-bold text-2xl mt-1 text-blue-700 third">
            HobbyHub
          </Link>
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
            <div
              className="tooltip tooltip-bottom"
              data-tip={user?.displayName || "No Name"}
            >
              <div className="hidden lg:block md:block rounded-full overflow-hidden border border-gray-300">
                <img
                  src={user?.photoURL}
                  alt="user avatar"
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
            </div>
            <button
              onClick={handleSignOut}
              className="btn btn-outline btn-primary primary"
            >
              Log Out
            </button>
          </>
        ) : (
          <Link className="btn btn-outline btn-primary primary" to="/login">
            Login
          </Link>
        )}

        {/* Theme toggle */}
        <input
          onClick={toggleDarkMode}
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
        />
      </div>
    </div>
  );
};

export default Header;
