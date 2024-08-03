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
import GithubWhite from '../assets/github-mark-white.png';
import HexRegex from '../assets/Hex_Gist_Logo.png';
import Figma from '../assets/Figma.png';
import Bootstrap from '../assets/Bootstrap_Logo.png';
import SQL from '../assets/mySql_Logo.png';
import ReactLogo from '../assets/React_Logo.png';
import Three from '../assets/Three_Logo.png';
import Tail from '../assets/Tailwind_Logo.png';
import arrow from '../assets/Arrow.png';

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
      <Profile />

    <main className="5/6">
      <div className="w-screen lg:w-3/5 lg:ml-20 lg:-mt-28">
        <div className="flex-wrap lg:grid lg:grid-cols-7">
          <figure className="col-span-5"> <a href="https://katherine-be.github.io/Digital-Orrery/" ><img src={Digital_Orrery_Logo} alt="..." class="justify-center "/></a>
          <figcaption className="max-sm:hidden grid grid-cols-10 -mt-30 xl:-mt-28">
            <a className="col-start-5 xl:col-start-7 max-w-3xl" href="https://github.com/Katherine-Be/Digital-Orrery" ><img src={GithubWhite} alt="..." class=" justify-center "/>
            </a>

          </figcaption>
          </figure>

          <p className="col-span-2 lg:ml-10 text-center text-6 font-bold md:text-3xl">In this digital orrery, the user can explore our solar system and see the planet sizes to scale.
          </p>
        </div>
        <figure className="w-3/5 ml-20"><img src={arrow} className=""/> </figure>

      </div>

      <div className="w-screen lg:w-3/5 lg:ml-20 ">
        <div className="flex-wrap lg:grid lg:grid-cols-7 h-min-xl">
          <p className="col-span-2 lg:ml-10 lg:mt-36 text-center text-6 font-bold md:text-3xl">A prototype for a car show website.
          </p>          
          <figure className="col-start-4 col-span-4 bg-black"><a href="https://katherine-be.github.io/StreetSceneCharlotte/"><img src={SSC} alt="..." class="contain "/></a>
          <figcaption className="max-sm:hidden grid grid-cols-10">
            <a className="col-start-5 xl:col-start-7 max-w-3xl -mt-10" href="https://github.com/Katherine-Be/StreetSceneCharlotte" ><img src={GithubWhite} alt="..." class=" justify-center "/>
            </a>

          </figcaption>
          </figure>
        </div>
        <figure className="w-3/5 ml-20"><img src={arrow} className="scale-x-[-1]" /> </figure>
      </div>

      <div className="w-screen lg:w-5/6 lg:ml-20 ">
        <div className="flex-wrap lg:grid lg:grid-cols-4 h-min-xl">     
          <figure className="col-span-3"><a href="https://gist.github.com/Katherine-Be/4b5ddfbe91e0d04b3aa731881f4918b6"><img src={HexRegex} alt="..." class="contain "/></a>

          </figure>
          <p className="col-span-1 lg:ml-10 lg:mt-36 text-center text-6 font-bold md:text-3xl">A gist explaining hex color codes and regex.
          </p>     
        </div>
        <figure className="w-3/5 ml-20 "><img src={arrow}/> </figure>
      </div>

      <div className="w-screen lg:w-5/6 lg:ml-20 ">
        <div className="flex-wrap lg:grid lg:grid-cols-4 h-min-xl">
          <p className="col-span-1 lg:ml-10 lg:mt-36 text-center text-6 font-bold md:text-3xl">A short game created using Marvel and Youtube APIs.
          </p>          
          <figure className="col-span-3"><a href="https://katherine-be.github.io/Marvel-Versus/"><img src={Marvel_Versus_1st_logo} alt="..." class="contain "/></a>
          <figcaption className="max-sm:hidden grid grid-cols-10 -mt-32">
            <a className="col-start-7 xl:col-start-8 max-w-3xl -mt-10" href="https://github.com/Katherine-Be/Marvel-Versus" ><img src={Github} alt="..." class=" justify-center "/>
            </a>

          </figcaption>
          </figure>
        </div>
        <figure className="w-3/5 ml-20"><img src={arrow} className="scale-x-[-1]" /> </figure>
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