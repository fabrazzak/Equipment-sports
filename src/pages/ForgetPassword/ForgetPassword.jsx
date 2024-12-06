import React, { useContext, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../component/AuthProvider/AuthProvider';



const ForgetPassword = () => {

    const { loginUser, updatePass } = useContext(AuthContext)

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;

        updatePass(email)
            .then(() => {
                toast("Please check you email");
                event.target.reset();

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;



            });




    }


    return (
        <div>
            <Helmet>
                <title> Password Update | Canada Career Counselling</title>
            </Helmet>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center ">

                    </div>
                    <div className="card bg-base-100 md:w-96  shrink-0 shadow-2xl">
                        <form onSubmit={handleOnSubmit} className="card-body">


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />

                            </div>

                            <div className="form-control mt-6 ">
                                <button className="btn btn-primary bg-green-700 text-white font-bold hover:bg-green-600  border-none">Send</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default ForgetPassword;