import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const Header = () => {
    const menuItems = (
        <>
            <Link to="/" className=" btn btn-ghost font-semibold">
                Home
            </Link>
            <Link to="/login" className=" btn btn-ghost font-semibold">
                Login
            </Link>
            <Link to="/signup" className=" btn btn-ghost font-semibold">
                SignIn
            </Link>
        </>
    );
    return (
        <div className="navbar bg-base-100 border-b h-20 border-slate-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menuItems}
                    </ul>
                </div>
                <Link to="/">
                    <img src={logo} alt="logo" className="w-12 h-12"></img>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">{menuItems}</ul>
            </div>
            <div className="navbar-end">
                <Link className="btn btn-outline">Appointment</Link>
            </div>
        </div>
    );
};

export default Header;
