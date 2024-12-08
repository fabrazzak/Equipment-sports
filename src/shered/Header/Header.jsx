import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../component/AuthProvider/AuthProvider';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { FaAffiliatetheme } from 'react-icons/fa';
import { IoMdSunny } from 'react-icons/io';
const Header = () => {
    const { singOut, user, loading, toggleTheme, theme } = useContext(AuthContext)


    const navigate = useNavigate()

    const logOutHandle = () => {
        singOut()
            .then(() => {
                // Sign-out successful.\
                navigate("/login")
            }).catch((error) => {
                // An error happened.
            });

    }

    const itemList =
        <>

            <li> <NavLink to="/">Home</NavLink>    </li>
            <li> <NavLink to="/all-sports">All Sports Equipment</NavLink>  </li>
            <li>  <NavLink to="/add-equipment">Add Equipment</NavLink> </li>
            <li> <NavLink to="/my-equipment-list">My Equipment List</NavLink>   </li >


        </>




    return (
        <div className={` ${theme == "dark" ? "bg-[#272a33]" : "bg-white"}   `}>
            <div className={`navbar container  mx-auto lg:text-white ${theme == "dark" ? "text-white" : "text-black"} `}>
                <div className="navbar-start flex flex-col md:flex-row ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className={`btn btn-ghost lg:hidden ${theme == "dark" ? "text-white" : "text-black"}`}>
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
                    <a className={`btn btn-ghost text-xl  ${theme == "dark" ? "text-white" : "text-[#272a33]"}`}>Equipment Sports</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className={`menu menu-horizontal px-1 font-bold gap-6 ${theme == "dark" ? "text-white" : "text-[#272a33]"} `}>

                        {itemList}

                    </ul>
                </div>
                <div className="navbar-end  flex gap-6 flex-col md:flex-row">
                    {user ? <li className={`flex ${theme == 'dark'?"text-white":"text-black"}`} onClick={logOutHandle}><a href="#" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} className='flex gap-4 content-center item-center justify-center ' > <img className='w-10 h-10 rounded-full ' src={user?.photoURL} alt="" referrerPolicy="no-referrer" /> <span className={`mt-2 font-bold`}>Log out</span></a></li> : <ul className='flex gap-6 font-bold'><li className={` ${theme == "dark" ? "text-white" : "text-[#272a33]"}`}><NavLink to='/login'>Login</NavLink></li> <li className={` ${theme == "dark" ? "text-white" : "text-[#272a33]"}`}> <NavLink to="/register">Register</NavLink></li ></ul>}
                    <li className='flex' > <button className={`btn btn-outline  ${theme == "dark" ? "text-white" : "text-[#272a33]"} flex gap-3 content-center items-center`} onClick={toggleTheme}>  {theme == "dark" ? <>Dark < FaAffiliatetheme /></> : <>Light < IoMdSunny /></>}</button></li>
                </div>
            </div>
            <Tooltip id="my-tooltip" className='z-10' />

        </div>
    );
};

export default Header;