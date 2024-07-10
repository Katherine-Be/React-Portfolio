import React from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../assets/Portfolio_logo_6_idea.png';


function Header() {


    return (
      <header>
        <nav class="flex items-center justify-between flex-wrap bg-cyan-400 p-6 mb-12">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <img class="fill-current h-30 w-32 mr-2" width="54" height="54" src={ icon }></img>
            <span class="flex-wrap ont-semibold text-2xl sm:text-4xl tracking-tight">Katherine Alex Bensley</span>
          </div>
          {/*this div is a menu button on mobile  */}
          {/* <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div> */}
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-3xl lg:flex-grow">
            <NavLink to="/" activeClassName="active" className="block mt-4 lg:inline-block lg:mt-0 text-indigo-100 hover:text-white mr-4">About</NavLink>

            <NavLink to="/Projects" activeClassName="active" className="block mt-4 lg:inline-block lg:mt-0 text-indigo-100 hover:text-white mr-4">Projects</NavLink>

            <NavLink to="/Contact" activeClassName="active" className="block mt-4 lg:inline-block lg:mt-0 text-indigo-100 hover:text-white">Contact</NavLink>

            </div>
            <div>
            <NavLink to="/Resume" activeClassName="active" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Resume</NavLink>

            </div>
          </div>
        </nav>
      </header>
      
    )
}

export default Header;