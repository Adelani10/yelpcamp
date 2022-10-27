import React from "react";
import { Link } from "react-router-dom";

export default function Home () {
    return (
        <section className="w-full flex flex-col md:flex-row ">
            <article className="flex flex-col md:order-first order-last md:w-1/2 space-y-12 py-4 md:px-12 px-6">

                <Link to="/" className="">
                    <img src="/Logo.svg" alt="" className="" />
                </Link>

                <div className="flex flex-col text-neutral-700 space-y-4">
                    <h1 className="md:text-3xl text-2xl text-black font-bold">Explore the best camps on earth.</h1>
                    <p>YelpCamp is a curated 1st of the best camping spots on Earth</p>
                    <article className="text-sm space-y-1">
                        <p>
                            <span className="text-teal-400 mr-2">
                                <i class="fa-solid fa-circle-check"></i>
                            </span> 
                            Add your own camp suggestion
                        </p>
                        <p>
                            <span className="text-teal-400 mr-2">
                                <i class="fa-solid fa-circle-check"></i>
                            </span>
                            Leave revies and experiences
                        </p>
                        <p>
                            <span className="text-teal-400 mr-2">
                                <i class="fa-solid fa-circle-check"></i>
                            </span>
                            See location for all camps
                        </p>
                    </article>
                    <Link  to="/camps"
                        className="bg-black capitalize text-[#f5f5f5] self-start p-2 rounded-sm hover:bg-stone-600">
                        view campgrounds
                    </Link>

                    <div className="pt-4">
                        <h2>Partnered with:</h2>
                        <article className="flex">
                            <img src="Airbnb.svg" alt="" className="max-w-[33%]" />
                            <img src="Booking.svg" alt="" className="max-w-[33%]" />
                            <img src="Plum Guide.svg" alt="" className="max-w-[33%]" />
                        </article>
                    </div>

                </div>
            </article>

            <article className="md:w-1/2">
                <img src="/Hero Image.jpg" alt="" className="w-full hidden md:inline-block" />
                <img src="/Hero Image (Tablet and Mobile).jpg" alt="" className="w-full md:hidden inline-block" />
            </article>

        
        </section>
    )
}