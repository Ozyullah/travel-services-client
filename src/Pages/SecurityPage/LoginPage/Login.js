import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TravelContext } from '../../../ContextPage/AuthContext';

const Login = () => {
    const provider =new GoogleAuthProvider()
    const {user, logInWithEmailandPassword, signInWithGoogle}=useContext(TravelContext);

    const navigate=useNavigate();
    const location =useLocation();

    const from =location.state?.form?.pathname || "/"


    const handleLoginWithEmail=event=>{
        event.preventDefault();
        const form =event.target;
        const email =form.email.value;
        const password =form.password.value;

        form.reset('')

        logInWithEmailandPassword(email, password)
        .then(result =>{
            const user =result.user;
        })
        .catch(error =>{
            console.error('firebase',error)
        })
        navigate(from, {replace: true});
    }


    const handleGoogleLogIn=()=>{
        signInWithGoogle(provider)
        .then(result=>{
            const user =result.user;
        })
        .catch(error=>{
            console.error('firebase', error)
        })

        navigate(from, {replace: true})
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLoginWithEmail} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <div className='text-center mb-5'>
                            <button onClick={handleGoogleLogIn}><FcGoogle /></button>
                            <button className='ml-3'><FaGithub/></button>
                        </div>

                        <p className='text-center  mb-5'>Alredy have an account <Link className='text-blue-500' to={'/signin'}>SignIn</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;