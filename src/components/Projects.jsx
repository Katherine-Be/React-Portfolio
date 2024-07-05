import React from 'react';

function Projects() {
    return (
        <section id="projects">
        <h2>Projects</h2>
        <div class="project">
            <a href="https://katherine-be.github.io/Digital-Orrery/">
                <h3>Digital Orrery</h3>
                <figure>
                    <img src="Digital_Orrery_Logo.png" alt="Project 1" />
                </figure>
                <p>Interactive, 3-dimensional solar system simulator built with Three.js and Vite.</p>
            </a>
        </div>
        <div class="project">
            <a href="https://katherine-be.github.io/Marvel-Versus/">
                <h3>Marvel Versus</h3>
                <figure>
                <img src="./assets/Marvel_Versus_1st_logo.png" alt="Project 2" />
                </figure>
                <p>My first computer game! Inspired by arcade cabinets, my team made this game is made with the Marvel API and vanilla JavaScript. </p>
            </a>
        </div>
        <div class="project">
            <a href="https://noted-1-c0882f514de5.herokuapp.com/">
                <h3>Noted!</h3>
                <figure>
                    <img src="./assets/Noted_Logo.png" alt="Project 3" />
                </figure>
                <p>This note-taker is a Node-server application built with Express.</p>
            </a>
        </div>
    </section>
    )
}

export default Projects;