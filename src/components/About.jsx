import React from 'react';
import avatar from '../assets/portraitalt1.png';
function About() {
    return (
        <section >
            <h2 class="ml-5 lg:ml-10 xl:ml-20 2xl:ml-96 text-4xl md:text-6xl" >About Me</h2>
            <div class="absolute -mt-48 sm:-mt-20 lg:-mt-0 w-full flex justify-end sm:justify-center">
                <figure class="h-48 w-48 sm:h-56 sm:w-56 lg:h-80 lg:w-80"> {/*need to push the figure up and to the right on small screens!!!!!*/}
                    <img src={avatar} class="rounded-full object-cover h-full w-full shadow-md" />
                </figure>
            </div>

            <div  class="flex-wrap lg:flex-row">  
                <div class="basis-full lg:basis-1/3 group w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring hover:ring-shadesOfBlue dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
                    <div class="bg-shadesOfBlue flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
                        <span class="text-3xl md:text-5xl text-white dark:text-slate-800 group-hover:text-shadesOfBlue dark:group-hover:text-white transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
                        </span>
                    </div>
                    <div class="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                        <div>
                            <h2 class="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-4 my-8">As A Team Leader
                            </h2>
                        </div>
                        <div>
                            <p class="text-center text-base dark:text-white">I have 11 years of experience leading teams in multiple industries. In my my early years, I built teams and operations
                                for several new local businesses which grew to succeed and break even within their first year. Most recently, I 
                                had the opportunity to expand an existing team, hiring on 18 new members, and can tout a 100% retention rate of team members and reaching 150% of 
                                the financial goal for that season. I am keen on motivation analysis and empathetic communication. My teams know that
                                I am there to be a resource with their best interests at heart. My aim is to create a habit of success ensured by skill
                                development and thorough communication.
                            </p>
                        </div>
                        <a class="flex mt-12 border-2 bottom-0 border-shadesOfBlue dark:border-slate-800 dark:text-slate-800 p-2 px-6 capitalize font-semibold text-shadesOfBlue rounded-md group-hover:bg-shadesOfBlue dark:group-hover:bg-slate-800 group-hover:text-white transform ease-in-out delay-75 opacity-85 hover:opacity-100"
                            href="#">view details
                        </a>
                    </div>
                </div>

                <div class="basis-full lg:basis-1/3 group w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring hover:ring-shadesOfBlue dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
                    <div class="bg-shadesOfBlue flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
                        <span class="text-3xl md:text-5xl text-white dark:text-slate-800 group-hover:text-shadesOfBlue dark:group-hover:text-white transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
                        </span>
                    </div>
                    <div class="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                        <div>
                            <h2 class="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-4 my-8">As A Creator
                                </h2>
                        </div>
                        <div>
                            <p class="text-center text-base dark:text-white"><em>Success is a science; if you have the conditions, you get the result.</em><br />
                                - Letters of Oscar Wilde
                            </p>
                            <p>Mathematically this is known as "likelihood" - it's a fun concept to mull over. 
                                I enjoy STEM topics, but find the most joy in creating experiences for others. 
                                Whether it be for my professional teams, or for my D&D teams, 
                                I love to create experiences where people grow and find success.
                            </p>
                        </div>
                        <a class="flex mt-12 border-2 bottom-0 border-shadesOfBlue dark:border-slate-800 dark:text-slate-800 p-2 px-6 capitalize font-semibold text-shadesOfBlue rounded-md group-hover:bg-shadesOfBlue dark:group-hover:bg-slate-800 group-hover:text-white transform ease-in-out delay-75 opacity-85 hover:opacity-100"
                            href="#">view details
                        </a>
                    </div>
                </div>

                <div class="basis-full lg:basis-1/3 group w-64 h-96 bg-white dark:bg-shadesOfBlue shadow-md relative rounded-lg m-4 hover:ring hover:ring-shadesOfBlue dark:hover:ring-white transform duration-500 hover:scale-105 hover:shadow-xl">
                    <div class="bg-shadesOfBlue flex justify-center items-center w-28 h-28 rounded-full absolute mx-auto right-0 left-0 -inset-y-14 border-4 border-slate-200 dark:border-slate-800 group-hover:bg-white dark:group-hover:bg-shadesOfBlue group-hover:shadow-md transform duration-300">
                        <span class="text-3xl md:text-5xl text-white dark:text-slate-800 group-hover:text-shadesOfBlue dark:group-hover:text-white transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                            </svg>
                        </span>
                    </div>
                    <div class="flex flex-col items-center justify-center absolute mx-auto inset-0 p-4">
                        <div>
                            <h2 class="text-xl capitalize font-bold text-shadesOfBlue dark:text-slate-800 my-4 my-8">As A Developer
                            </h2>
                        </div>
                        <div>
                            <p class="text-center text-base dark:text-white">As an interactive developer, my primary aim is to create an experience and 
                                communicate an understanding of the user while effectively representing a 
                                brand's voice in the applications I build. I am versed in numerous web development technologies including, but not limited to - 
                                HTML, CSS, JavaScript, Bootstrap, Node, Express, and MySQL. My current studies include 
                                Three.js, React and Yuka AI. One thing I love about this industry is that there 
                                is always something new to learn.
                            </p>
                        </div>
                        <a class="flex mt-12 border-2 bottom-0 border-shadesOfBlue dark:border-slate-800 dark:text-slate-800 p-2 px-6 capitalize font-semibold text-shadesOfBlue rounded-md group-hover:bg-shadesOfBlue dark:group-hover:bg-slate-800 group-hover:text-white transform ease-in-out delay-75 opacity-85 hover:opacity-100"
                            href="#">view details
                        </a>
                    </div>
                </div>
            </div>  
        </section>
    //     <section id="about">
    //         <h2>About Me</h2>
    //         <div>
    //             <h3>As A Team Leader</h3>
    //             <p>I have 11 years of experience leading teams in multiple industries. In my my early years, I built teams and operations
    //                 for several new local businesses which grew to succeed and break even within their first year. Most recently, I 
    //                 had the opportunity to expand an existing team, hiring on 18 new members, and can tout a 100% retention rate of team members and reaching 150% of 
    //                 the financial goal for that season. I am keen on motivation analysis and empathetic communication. My teams know that
    //                 I am there to be a resource with their best interests at heart. My aim is to create a habit of success ensured by skill
    //                 development and thorough communication.
    //             </p>
    //         </div>
    //         <div>
    //             <h3>As A Creator</h3>
    //             <p><em>Success is a science; if you have the conditions, you get the result.</em><br />
    //             - Letters of Oscar Wilde</p>
    //             <p>Mathematically this is known as "likelihood" - it's a fun concept to mull over. 
    //                 I enjoy STEM topics, but find the most joy in creating experiences for others. 
    //                 Whether it be for my professional teams, or for my D&D teams, 
    //                 I love to create experiences where people grow and find success.
    //             </p>
    //         </div>
    //         <div>
    //             <h3>As A Developer</h3>
                // <p>As an interactive developer, my primary aim is to create an experience and 
                //     communicate an understanding of the user while effectively representing a 
                //     brand's voice in the applications I build. I am versed in numerous web development technologies including, but not limited to - 
                //     HTML, CSS, JavaScript, Bootstrap, Node, Express, and MySQL. My current studies include 
                //     Three.js, React and Yuka AI. One thing I love about this industry is that there 
                //     is always something new to learn. </p>
    //         </div>
    //     </section>
    )
}

export default About;