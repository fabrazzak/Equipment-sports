import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../component/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, loginWithGoogle } = useContext(AuthContext)
    const [eyes, setEyes] = useState(true)
    const navigate = useNavigate();
    const handleOnSubmit = (event) => {

        event.preventDefault();

        const name = event.target.name.value;
        const photoUrl = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate("/");

                if (user.email) {




                }


            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            });



    }
    const myFunction = () => {
        const x = document.getElementById("pass");
        if (x.type === "password") {

            setEyes(true)

            return x.type = "text";

        } else {
            x.type = "password";
            setEyes(false)
        }
    }
    const loginWithGoogleHandle = () => {

        loginWithGoogle()
            .then((userCredential) => {

                location?.state ? navigate(location?.state) : navigate("/");
            })
            .catch((error) => {

            });

    }
    return (
        <div>
            <Helmet>
                <title> Sign Up | Canada Career Counselling</title>
            </Helmet>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center ">

                    </div>
                    <div className="card bg-base-100 md:w-96  shrink-0 shadow-2xl">
                        <form onSubmit={handleOnSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='flex'><input id='pass' type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="Min 1 number & 1
                                 upper & lowercase letter, and min 6 character " name='password' placeholder="password" className="z-0 input w-full input-bordered" required />
                                    <span className='ms-[-30px] mt-4 cursor-pointer z-10' onClick={myFunction}> {eyes ? <FaEyeSlash /> : <IoEyeSharp />} </span></div>
                                <label className="label">
                                    <Link to='/login' href="#" className="label-text-alt link link-hover text-green-700 font-bold ">Login here , Already have account;</Link>

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-green-700 text-white font-bold hover:bg-green-600  border-none">Sign Up</button>
                            </div>
                        </form>
                        <div className="form-control pt-0 p-6 gap-6 ">
                            <p className='text-center font-bold '>Sign with </p>
                            <button onClick={loginWithGoogleHandle} className="btn btn-outline  font-bold hover:bg-green-600  text-4xl"><FcGoogle /><span className='text-2xl'>oogle</span></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;