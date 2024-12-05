import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {

    const itemList =
        <>

            <li> <NavLink to="/">Home</NavLink>    </li>
            <li> <NavLink to="/all-sports">All Sports</NavLink>  </li>
            <li>  <NavLink to="/all-add-equipment">All Add Equipment</NavLink> </li>
            <li> <NavLink to="/my-equipment-list">My Equipment List</NavLink>   </li >
            <li> <NavLink to="/login">Login</NavLink>    </li >
            <li> <NavLink to="/register">Register</NavLink></li >

        </>
    return (
        <div className='bg-[#272a33]   '>
            <div className="navbar container  mx-auto lg:text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box w-72 mt-3  p-2 shadow z-10">
                            {itemList}

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Equipment Sports</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold gap-6 text-white">

                        {itemList}

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Logout</a>
                </div>
            </div>

        </div>
    );
};

export default Header;