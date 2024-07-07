import React from 'react';

import { Carousel } from "flowbite-react";
import Digital_Orrery_Logo from '../assets/Digital_Orrery_Logo.png';
import Marvel_Versus_1st_logo from '../assets/Marvel_Versus_1st_logo.png';
import Noted_Logo from '../assets/Noted_Logo.png';

function Projects() {
    const carouselContainer = {
            "root": {
              "base": "relative h-full w-full",
              "leftControl": "absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
              "rightControl": "absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none"
            },
            "indicators": {
              "active": {
                "off": "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
                "on": "bg-white dark:bg-gray-800"
              },
              "base": "h-3 w-3 rounded-full",
              "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
            },
            "item": {
              "base": "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
              "wrapper": {
                "off": "w-full flex-shrink-0 transform cursor-default snap-center",
                "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
              }
            },
            "control": {
              "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
              "icon": "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
            },
            "scrollContainer": {
              "base": "flex h-72 snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
              "snap": "snap-x"
            }
          }

    return (
        <div className="m-0 sm:m-10">
        <div className="h-dvh">
        <Carousel class="h-64 m:h-max sm:h-100dvh">
          <img src={Digital_Orrery_Logo} alt="..." />
          <img src={Marvel_Versus_1st_logo} alt="..." />
          <img src={Noted_Logo} alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        </Carousel>
      </div>
      </div>
    )
}

/* //     <section id="projects">
    //     <h2>Projects</h2>
    //     <div class="project">
    //         <a href="https://katherine-be.github.io/Digital-Orrery/">
    //             <h3 class="md:text-right">Digital Orrery</h3>
    //             <figure>
    //                 <img src={Digital_Orrery_Logo} alt="Project 1" />
    //             </figure>
    //             <p>Interactive, 3-dimensional solar system simulator built with Three.js and Vite.</p>
    //         </a>
    //     </div>
    //     <div class="project">
    //         <a href="https://katherine-be.github.io/Marvel-Versus/">
    //             <h3>Marvel Versus</h3>
    //             <figure>
    //             <img src={Marvel_Versus_1st_logo} alt="Project 2" />
    //             </figure>
    //             <p>My first computer game! Inspired by arcade cabinets, my team made this game is made with the Marvel API and vanilla JavaScript. </p>
    //         </a>
    //     </div>
    //     <div class="project">
    //         <a href="https://noted-1-c0882f514de5.herokuapp.com/">
    //             <h3>Noted!</h3>
    //             <figure>
    //                 <img src={Noted_Logo} alt="Project 3" />
    //             </figure>
    //             <p>This note-taker is a Node-server application built with Express.</p>
    //         </a>
    //     </div>
    // </section> */



export default Projects;