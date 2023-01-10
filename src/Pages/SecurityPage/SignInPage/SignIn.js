import React, { useContext } from 'react';
import { TravelContext } from '../../../ContextPage/AuthContext';
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const provider =new GoogleAuthProvider();
    const { addedUserWithEmailPassword, signInWithGoogle } = useContext(TravelContext)

    const handleSignIn = event => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const photoUrl = from.photo.value;
        const email = from.email.value;
        const password = from.password.value;

        from.reset('')


        addedUserWithEmailPassword(email, password)
            .then((result) => {
                const user = result.user;
            })
            .catch((error) => {
                console.error('firebase', error)
            })

    }


    const handleGoogleSignIn =()=>{
        signInWithGoogle(provider)
        .then(result =>{
            const user =result.user;
        })
        .catch(error=>{
            console.error('firebase',error)
        })
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
                        <form onSubmit={handleSignIn} className="card-body">

                            {/* Name section */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">FullName</span>
                                </label>
                                <input type="text" placeholder="Enter Your name" name='name' className="input input-bordered" />
                            </div>
                            {/* PhotoUrl section */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="text" placeholder="Enter Photo url" name='photo' className="input input-bordered" />
                            </div>

                            {/* Email section */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" />
                            </div>

                            {/* Password section */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <div className='text-center mb-5'>
                            <button onClick={handleGoogleSignIn}><FcGoogle /></button>
                            <button className='ml-3'><FaGithub/></button>
                        </div>

                        <p className='text-center  mb-5'>Alredy have an account <Link className='text-blue-500' to={'/login'}>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;