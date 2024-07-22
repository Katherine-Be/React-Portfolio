
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/favicon_2.png';

// add to the homepage



function NavSideBar() {
    // useEffect for displaying the wishlist and favorites only if the user is logged in

    const headerIndex = {
        zIndex:0
    }



    return (
        <div className="isolate object-left items-center max-w-dvh md:w-100 2xl:w-screen h-60 overflow-hidden text-gray-400 bg-slate-900" style={headerIndex}>
            <div className="grid grid-cols-4 grid-rows-2 h-60 items-stretch justify-center sm:ml-0 md:ml-72 lg:ml-64 p-6">
                <div className="col-start-1 grid">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active flex justify-self-center mt-2 py-0 md:py-5 rounded hover:bg-gray-700 hover:text-gray-300' : 'flex justify-self-center mt-2 py-0 md:py-5 rounded hover:bg-gray-700 hover:text-gray-300'}>
                        {/*can insert small icon here*/}
                        <span className="ml-2 text-sm md:text-lg lg:text-xl font-medium">Projects</span>
                    </NavLink>
                </div>
                <div className="col-start-2 grid">
                    <NavLink to="/About" className={({ isActive }) => isActive ? 'active flex justify-self-center mt-2 py-0 md:py-5 rounded hover:bg-gray-700 hover:text-gray-300' : 'flex justify-self-center mt-2 py-0 md:py-5 rounded hover:bg-gray-700 hover:text-gray-300'}>
                        {/*can insert small icon here*/}
                        <span className="ml-2 text-sm md:text-lg lg:text-xl font-medium">About Me</span>
                    </NavLink>
                </div>
                <div className="col-start-3 grid">
                    <NavLink to="/Contact" className={({ isActive }) => isActive ? 'active flex justify-self-center mt-2 py-0 md:py-5 rounded hover:bg-gray-700 hover:text-gray-300' : 'flex  justify-self-center  mt-2 py-0 md:py-5 rounded hover:bg-gray-700 hover:text-gray-300'}>
                        {/*can insert small icon here*/}
                        <span className="ml-2 text-sm md:text-lg lg:text-xl font-medium">Contact Me</span>
                    </NavLink>
                </div>
                    <div className="col-start-4 self-center text-xs md:text-3xl rounded-md border border-transparent bg-[#ae45b0] px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <NavLink to="/Resume">Resume
                    </NavLink>
                    </div>
                <div className="h-20 lg:h-32 col-start-2 md:col-start-1 col-end-4 text-3xl md:text-6xl lg:5xl xl:text-7xl 2xl:text-8xl text-center">
                    <div className="text-center text-lg md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl z-10">
                        <h1 className="font-bold mb-4 text-white neon-text glitch hover-3d" data-text="Katherine Alex Bensley">Katherine Alex Bensley</h1>
                    </div>
                </div>

            </div>
            <div className="flex-col items-center -mt-60 w-24 md:w-52 lg:w-64 h-dvh overflow-hidden text-gray-400 bg-slate-900 ">
                <div className="flex flex-col items-center w-full mt-3 border-b ml-2 border-gray-700">
                    <NavLink to="/" className={({ isActive }) => isActive ? ' sm:px-2 md:px-8 mt-2 rounded hover:bg-gray-700 hover:text-gray-300' : 'sm:px-2 md:px-8 mt-2 py-0 md:py-10 rounded hover:bg-gray-700 hover:text-gray-300'}>
                    <img src={Logo} ></img>
                    </NavLink>
                </div>
                
            </div>
        </div>
    );
}

export default NavSideBar;


