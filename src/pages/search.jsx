import React, {useState} from "react";
import { Link } from "react-router-dom";


export default function Search () {
    const [nav, setNav] = useState(false)

    return (
        <section className="space-y-4 md:space-y-0 pb-4 h-full">
            <aside 
                className={`absolute space-y-3 md:hidden text-white top-0 left-0 bottom-0 w-3/4 flex flex-col items-center justify-center h-full bg-[#f5f5f5] transition-all duration-700 ease-in-out -translate-x-full ${nav && "translate-x-[]"}`}
            >
                <Link to="/camps/signIn" className="bg-stone-400 w-[90%] p-2 mx-auto inline-block rounded-md hover:bg-black" >LogIn</Link>

                <Link to="/camps/signUp" className="bg-stone-400 w-[90%] p-2 mx-auto inline-block rounded-md hover:bg-black">Sign Up</Link>
            </aside>

            <nav className="flex justify-between px-2">
                <div className="flex space-x-3 font-semibold items-center">
                    <Link to="/" ><img src="/Logo.svg" alt="" /></Link>
                    <Link to="/" className="" >Home</Link>
                </div>
                <div className="md:flex space-x-6 items-center hidden ">
                    <Link to="/camps/signIn" >LogIn</Link>
                    <Link to="/camps/signUp" className="bg-black text-white text-sm p-2 rounded-sm" >Create an account</Link>
                </div>
                <button onClick={()=> setNav(!nav)}
                        className="md:hidden bg-[#f5f5f5] h-6 flex justify-center items-center px-1 text-xl">
                    <img src="/Hamburger Menu.svg" alt="options" />
                </button>
            </nav>
            <article className="bg-[#f5f5f5] space-y-2 p-6">
                <h1 className="font-bold text-2xl">
                    Welcome to YelpCamp!
                </h1>
                <p className="md:max-w-[45%]">View our hand-picked campgrounds from all over the world, or add your own</p>
                <form className="space-y-2 md:space-y-0 md:max-w-[45%]" >
                    <input 
                        type="text" 
                        placeholder="Search for camps" 
                        className="p-2 rounded-sm block w-full md:inline md:w-[80%]" 
                    />
                    <button className="rounded-sm bg-black p-2 text-white block w-full md:inline md:w-[20%]">Search</button>
                </form>
                <a href="" className="underline inline-block pt-4">Or add your own campground</a>
            </article>
        </section>
    )
}