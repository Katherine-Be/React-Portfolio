import React from 'react';
import Profile from './Profile';

import { Carousel } from "flowbite-react";
import Digital_Orrery_Logo from '../assets/Digital_Orrery_Logo_Titled.png';
import Marvel_Versus_1st_logo from '../assets/Marvel_Versus_1st_logo.png';
import Noted_Logo from '../assets/Noted_Logo.png';
import styled from 'styled-components';
import SSC from '../assets/SSC_Logo.png';
import Weather from '../assets/City_Weather_Favicon_Titled.png';
import Scheduler from '../assets/Daily_Scheduler_Logo_Titled.png';
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
            <div className="flex h-full items-center justify-center bg-slate-300 dark:bg-gray-700 dark:text-white">
              <a href="https://katherine-be.github.io/Digital-Orrery/"><img src={Digital_Orrery_Logo} alt="..." class="w-screen object-cover"/>
                </a>
               <a href="https://github.com/Katherine-Be/Digital-Orrery" ><img src={Github} alt="..." class="max-w-sm"/>
                </a>
            </div>

            <div className="flex h-full items-center justify-center bg-slate-400 dark:bg-gray-700 dark:text-white">
              <a href="https://katherine-be.github.io/Marvel-Versus/"><img src={Marvel_Versus_1st_logo} alt="..." class="w-screen object-cover"/>
                </a>
               <a href="https://github.com/Katherine-Be/Marvel-Versus"><img src={Github} alt="..." class="max-w-sm"/>
                </a>
            </div>

            <div className="flex h-full items-center justify-center bg-slate-500 dark:bg-gray-700 dark:text-white">
              <a href="https://noted-1-c0882f514de5.herokuapp.com/"><img src={Noted_Logo} alt="..." class="sm:width-sm md:max-w-md object-fit"/>
                </a><a href="https://github.com/Katherine-Be/Noted"><img src={Github} alt="..." class="w-sm"/>
                </a>
            </div>

            <div className="flex h-full items-center justify-center bg-slate-600 dark:bg-gray-700 dark:text-white">
              <a href="https://katherine-be.github.io/StreetSceneCharlotte/"><img src={SSC} alt="..." class="w-screen object-fit"/>
                </a>
              <a href="https://github.com/Katherine-Be/StreetSceneCharlotte"><img src={Github} alt="..." class=" max-w-sm"/>
                </a>
            </div>

            <div className="flex h-full items-center justify-center bg-slate-200 dark:bg-gray-200 dark:text-white">
              <a href="https://katherine-be.github.io/City-Weather/"><img src={Weather} alt="..." class="sm:width-sm md:max-w-md object-fit"/>
                </a>
              <a href="https://github.com/Katherine-Be/City-Weather"><img src={Github} alt="..." class=" max-w-sm"/>
                </a>
            </div>

            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              <a href="https://katherine-be.github.io/Daily_Scheduler/"><img src={Scheduler} alt="..." class="sm:width-sm md:max-w-md"/>
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


export default Projects;