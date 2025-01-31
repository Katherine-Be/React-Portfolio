import React from 'react';
import LinkedIn from '../assets/In-Blue-40.png';
import GitHub from '../assets/github-mark.png';
import Icon from '../assets/Portfolio_logo_4_idea.png';

function Footer() {
    return (
        <div class="flex justify-center space-x-5 mt-10">
            <a href="www.linkedin.com/in/katherine-bensley-89599624b">
                <img type="icon" src={ LinkedIn } alt="LinkedIn icon" class="bg-white rounded-md mr-5" />
             </a>
            <a href="https://github.com/Katherine-Be">
                <img type="icon" src={ GitHub } alt="GitHub icon" class="size-10 mr-5" />
            </a>
            <a href="https://ka-alex-bensley.netlify.app/">
                <img type="icon" src={ Icon } alt="portfolio icon with gradient background and initials K A B." class="size-10 rounded-md mr-5" />
            </a>
        </div>
    )
}

export default Footer;