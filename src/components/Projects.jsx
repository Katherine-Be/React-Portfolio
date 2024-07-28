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
import HexRegex from '../assets/Hex_Gist_Logo.png';
import Figma from '../assets/Figma.png';
import Bootstrap from '../assets/Bootstrap_Logo.png';
import SQL from '../assets/mySql_Logo.png';
import ReactLogo from '../assets/React_Logo.png';
import Three from '../assets/Three_Logo.png';
import Tail from '../assets/Tailwind_Logo.png';

import useWindowDimensions from '../utils/useWindowDimensions';

function Projects() {
  const centerBG = {
    backgroundSize: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }
  const figmaStyle = {
    backgroundImage: `url(${Figma})`,
  }
  const bootStyle = {
    backgroundImage: `url(${Bootstrap})`,
  }
  const mySq = {
    backgroundImage: `url(${SQL})`,
  }
  const reactStyle = {
    backgroundImage: `url(${ReactLogo})`,
  }
  const threeStyle = {
    backgroundImage: `url(${Three})`,
  }
  const twStyle = {
    backgroundImage: `url(${Tail})`,
  }



  const MyContainer = styled.div`
    // background-color: red;
  `

  const { height, width } = useWindowDimensions();


  return (
    
    <>
      {/* <Profile /> */}

    <main>
      <div className="container mx-auto">
        <div className="grid grid-cols-2  grid-rows- md:grid-rows-2 gap-5">
            <a className="col-span-2 mx-auto w-full" href="https://katherine-be.github.io/Digital-Orrery/"><img src={Digital_Orrery_Logo} alt="..." class="justify-center "/>
            </a>
            <p className="col-span-1 my-10 mx-auto text-center text-6 font-bold md:text-4xl">In this digital orrery, the user can explore our solar system and see the planet sizes to scale.
             <a className="my-5 md:my-10 mx-auto max-w-3xl" href="https://github.com/Katherine-Be/Digital-Orrery" ><img src={Github} alt="..." class=" justify-center "/>
             </a>
            </p>
            <div className="col-start-2 grid grid-cols-8 grid-rows-4 my-10 mx-auto hexContainer">
              <p style={{...figmaStyle, ...centerBG}} className="col-start-3 col-end-5 row-start-1 translate-x-1/4 translate-y-1/2 bg-cyan-500 hexagons">Text</p>
              <p style={{...bootStyle, ...centerBG}} className="col-start-2 col-end-4 row-start-2 hexagons "> text</p>
              <p style={{...mySq, ...centerBG}}className="col-start-5 col-end-7 row-start-2 hexagons"> text</p>
              <p style={{...reactStyle, ...centerBG}}className="col-start-5 col-end-7 row-start-3 translate-x-1/8 hexagons"> text</p>
              <p style={{...threeStyle, ...centerBG}}className="col-start-2 col-end-4 row-start-3 bg-red-200 hexagons"> text</p>
              <p style={{...twStyle, ...centerBG}}className="col-start-3 col-end-5 row-start-4 translate-x-1/4 -translate-y-1/2 bg-red-200 hexagons"> text</p>
            </div>
          </div>
        </div>
    </main>










      {/* <MyContainer className="m-20">
        <div style={{
          height: `${height - 500}px`
        }}>
          <Carousel>
            <div className="flex object-contain items-center justify-center  dark:text-white">
              <a href="https://katherine-be.github.io/Digital-Orrery/"><img src={Digital_Orrery_Logo} alt="..." class="w-screen object-cover"/>
                </a>
               <a href="https://github.com/Katherine-Be/Digital-Orrery" ><img src={Github} alt="..." class="max-w-sm"/>
                </a>
            </div>

            <div className="flex  items-center justify-center dark:text-white">
              <a href="https://katherine-be.github.io/StreetSceneCharlotte/"><img src={SSC} alt="..." class="w-screen object-fit"/>
                </a>
              <a href="https://github.com/Katherine-Be/StreetSceneCharlotte"><img src={Github} alt="..." class=" max-w-sm"/>
                </a>
            </div>

            <div className="flex h-full items-center justify-center dark:text-white">
              <a href="https://gist.github.com/Katherine-Be/4b5ddfbe91e0d04b3aa731881f4918b6"><img src={HexRegex} alt="..." class="w-screen object-scale-down"/>
                </a>
              <a href="https://gist.github.com/Katherine-Be/4b5ddfbe91e0d04b3aa731881f4918b6"><img src={Github} alt="..." class=" max-w-sm"/>
                </a>
            </div>

            <div className="flex h-full items-center justify-center dark:text-white">
              <a href="https://katherine-be.github.io/Marvel-Versus/"><img src={Marvel_Versus_1st_logo} alt="..." class="w-screen object-cover"/>
                </a>
               <a href="https://github.com/Katherine-Be/Marvel-Versus"><img src={Github} alt="..." class="max-w-sm"/>
                </a>
            </div>            

          </Carousel>
        </div>
      </MyContainer> */}
    </>
  )
}


export default Projects;