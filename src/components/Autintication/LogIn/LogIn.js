import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../../Firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Assets/Page/Sheard/Loading';

const LogIn = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let signInerror;
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    } 
    if (gerror || error) {
        signInerror = <p className='text-red-600'>{error?.message||gerror?.message}</p>
    }
    if (loading || gloading) {
        return <Loading></Loading>
    }
    if (guser||user) {
        navigate(from, { replace: true });
    }
    return (
    
            <div className='flex h-screen justify-center items-center '>
        <div className="card w-96 bg-base-100 text-primary-content">
        <div className="card-body">
                    <h2 className=" my-5 text-center text-green-400 font-bold text-2xl">Log in</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email </span>
                    </label>
                            <input autoComplete="off"
                                type="email"
                                placeholder="Enter email" className="input input-bordered input-success w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value:true,
                                        massage:'please enter email'
                                    },
                                    pattern: {
                                      value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                      message:'please enter valid email'
                                    }
                                  })}/>
                    <label className="label">
                    {errors.email?.type === 'required' &&  <span className="label-text-alt text-red-600">{errors.email.massage}</span>}
                    {errors.pattern?.type === 'pattern' &&  <span className="label-text-alt text-red-600">{errors.email.massage}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">password </span>
                    </label>
                            <input autoComplete="off"
                                type="password"
                                placeholder="Enter password"
                                className="input input-bordered input-success w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        massage:"please provide a password"
                                    },
                                    pattern: {
                                        minLength:6,
                                        massage:"password must be 6 carecter"

                                    }
                                })}
                            />
                            
                            <label className="label">
                            {errors.password?.type === 'required' &&  <span className="label-text-alt text-red-600">{errors.password.massage}</span>}
                    {errors.password?.type === 'minLength' &&  <span className="label-text-alt text-red-600">{errors.password.massage}</span>}
                        
                       
                    </label>
                        </div>
                        {signInerror}
                   <input className="btn btn-outline btn-success  w-full max-w-xs" type="submit" value="Log In" />
                    </form>
                    <p>New to Doctors Portal? <Link to='/registation'> <span className='text-success'>Create new account</span> </Link></p>
                                
                    <div className="divider">OR</div>
                    <button onClick={()=>signInWithGoogle()} className="btn btn-outline btn-success">CONTINUE WITH GOOGLE</button>
                   
           </div>
            </div>
            </div>
        
    );
};

export default LogIn;


{/* <input type="email" name='email' placeholder="Enter email" className="input input-bordered input-success w-full max-w-xs" required/>
<input type="password" name='password' placeholder="Enter password" className="input input-bordered input-success w-full max-w-xs" required/>
<button className="btn btn-outline btn-success">Log In</button>
<p>New to Doctors Portal? <Link to='/registation'> <span className='text-success'>Create new account</span> </Link></p> */}