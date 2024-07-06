import React from 'react';

function Header() {
    return (
        <header>
        <h1 className="text-3xl font-bold underline">Katherine Alex Bensley</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;