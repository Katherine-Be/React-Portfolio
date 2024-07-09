import React from 'react';
import Profile from './Profile';

import { Carousel } from "flowbite-react";
import Digital_Orrery_Logo from '../assets/Digital_Orrery_Logo.png';
import Marvel_Versus_1st_logo from '../assets/Marvel_Versus_1st_logo.png';
import Noted_Logo from '../assets/Noted_Logo.png';
import styled from 'styled-components';
import SSC from '../assets/SSC_Logo.png';
import Weather from '../assets/City_Weather_Favicon.png';
import Scheduler from '../assets/Daily_Scheduler_Logo.png';
import Github from '../assets/github-mark.png';

import useWindowDimensions from '../utils/useWindowDimensions';

function Projects() {


  const MyContainer = styled.div`
    // background-color: red;
  `

  const { height, width } = useWindowDimensions();


  return (
    <>
      <Profile />

      <MyContainer className="m-0 sm:m-10 md-10">
        <div style={{
          height: `${height - 500}px`
        }}>
          <Carousel>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              <a href="https://katherine-be.github.io/Digital-Orrery/"><img src={Digital_Orrery_Logo} alt="..." class="max-w-7xl object-cover"/>
                </a>
               <a href="https://github.com/Katherine-Be/Digital-Orrery" ><img src={Github} alt="..." class="max-w-sm"/>
                </a>
            </div>

            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              <a href="https://katherine-be.github.io/Marvel-Versus/"><img src={Marvel_Versus_1st_logo} alt="..." class="max-w-7xl object-cover"/>
                </a>
               <a href="https://github.com/Katherine-Be/Marvel-Versus"><img src={Github} alt="..." class="max-w-sm"/>
                </a>
            </div>

            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              <a href="https://noted-1-c0882f514de5.herokuapp.com/"><img src={Noted_Logo} alt="..." class="max-w-md object-fit"/>
                </a><a href="https://github.com/Katherine-Be/Noted"><img src={Github} alt="..." class=" max-w-sm"/>
                </a>
            </div>

            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              <a href="https://katherine-be.github.io/StreetSceneCharlotte/"><img src={SSC} alt="..." class="max-w-7xl object-fit"/>
                </a>
              <a href="https://github.com/Katherine-Be/StreetSceneCharlotte"><img src={Github} alt="..." class=" max-w-sm"/>
                </a>
            </div>

            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              <a href="https://katherine-be.github.io/City-Weather/"><img src={Weather} alt="..." class="max-w-md object-fit"/>
                </a>
              <a href="https://github.com/Katherine-Be/City-Weather"><img src={Github} alt="..." class=" max-w-sm"/>
                </a>
            </div>

            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              <a href="https://katherine-be.github.io/Daily_Scheduler/"><img src={Scheduler} alt="..." class="max-w-md"/>
                </a>
              <a href="https://github.com/Katherine-Be/Daily_Scheduler"><img src={Github} alt="..." class=" max-w-sm"/>
                </a>
            </div>
          </Carousel>
        </div>
      </MyContainer>
    </>
  )
}

/* //     <section id="projects">
    //     <h2>Projects</h2>
    //     <div class="project">
            // <a href="https://katherine-be.github.io/Digital-Orrery/">
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