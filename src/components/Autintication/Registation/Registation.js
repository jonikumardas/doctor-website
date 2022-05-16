import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import Loading from '../../Assets/Page/Sheard/Loading';

const Registation = () => {

    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateerror] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigete = useNavigate();
    let signInerror;
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
       await createUserWithEmailAndPassword(data.email, data.password);
        await  updateProfile({ displayName:data.name })
        navigete('/apointment')
        console.log(data)

    } 
    if (loading || gloading||updating) {
        return <Loading></Loading>
    }
    if (gerror || error||updateerror) {
        signInerror = <p className='text-red-600'>{error?.message||gerror?.message||updateerror.massage}</p>
    }
    if (guser||user) {
        console.log(guser);
    }
    return (
        
        
        <div className='flex h-screen justify-center items-center '>
        <div className="card w-96 bg-base-100 text-primary-content">
        <div className="card-body">
                    <h2 className=" mb-5 text-center text-green-400 font-bold text-2xl">SIGN UP</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name </span>
                    </label>
                            <input autoComplete="off"
                                type="text"
                                placeholder="Enter name" className="input input-bordered input-success w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value:true,
                                        massage:'please enter name'
                                    }
                                  })}/>
                    <label className="label">
                    {errors.name?.type === 'required' &&  <span className="label-text-alt text-red-600">{errors.name.massage}</span>}
                            </label>
                        </div>
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
                        <span className="label-text">Password </span>
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
                   <input className="btn btn-outline btn-success  w-full max-w-xs" type="submit" value="SIGN UP" />
                    </form>
                    <p>Already have account? <Link to='/logIn'> <span className='text-success'>log in account</span> </Link></p>        
                    <div className="divider">OR</div>
                    <button onClick={()=>signInWithGoogle()} className="btn btn-outline btn-success">CONTINUE WITH GOOGLE</button>
                   
           </div>
            </div>
            </div>
    );
};

export default Registation;