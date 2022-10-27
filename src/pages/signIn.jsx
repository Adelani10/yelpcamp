import React from "react";
import { Link } from "react-router-dom";


export default function SignIn () {
    return (
        <section className="md:flex md:space-x-6 md:space-y-0 space-y-8 px-2">
            <div className="flex flex-col md:max-w-[50%] space-y-12 py-4">
                <nav className="flex space-x-3 font-semibold justify-between items-center">
                    <Link to="/" ><img src="/Logo.svg" alt="" /></Link>
                    <Link to="/camps" className="text-stone-400 text-xs">
                        <i className="fa-solid fa-arrow-left pr-2"></i>
                        Back to campground
                    </Link>
                </nav>

                <form className="space-y-4">
                    <h1 className="font-bold md:text-4xl text-2xl pb-4">Start exploring camps from all around the world.</h1>
                    <div className="space-y-2">
                        <label htmlFor="username" className="font-semibold">Username</label>
                        <input 
                            id="username"
                            type="text" 
                            placeholder="johndoe_91" 
                            className="h-10 md:h-12 flex rounded-md px-2 items-center bg-[#f5f5f5] w-full mx-auto text-stone-400" 
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="password" className="font-semibold">Password</label>
                        <input 
                            id="password"
                            type="password" 
                            placeholder="Enter Your Password" 
                            className="h-10 md:h-12 flex rounded-md px-2 items-center bg-[#f5f5f5] w-full mx-auto text-stone-400" 
                        />
                    </div>
                    <button className="rounded-sm bg-black p-2 text-white block w-full">
                        Log In
                    </button>
                    <h2>
                        Not yet a user? 
                        <span>
                            <Link to="/camps/signUp" className="mx-2 text-sky-600 font-semibold underline" >
                                Create an account
                            </Link>
                        </span>
                    </h2>
                </form>
                
                
            </div>
            <article className="bg-[#f5f5f5] flex justify-center md:max-w-[50%] md:p-28 py-12 px-8 flex-col items-start">
                <p className="font-bold">
                    "YelpCamp has honestly saved me hours of research time, and the camps on here are definitely well picked and added."
                </p>
                <div className="flex space-x-4 items-center">
                    <img src="User Testimonial.svg" alt="" className="h-10 w-10 rounded-full" />
                    <div className="">
                        <h1 className="font-bold text-xs">
                            May Andrews
                        </h1>
                        <h3 className="font-semibold text-[10px] text-stone-400">Professional Hiker</h3>
                    </div>
                </div>

            </article>
        </section>
    )
}