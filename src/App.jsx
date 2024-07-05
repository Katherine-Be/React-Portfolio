import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>Katherine Alex Bensley</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about">
        <h2>About Me</h2>
            <div>
                <h3>As A Team Leader</h3>
                <p><em>Success is a science; if you have the conditions, you get the result.</em><br />
                - Letters of Oscar Wilde</p>
                <p>Mathematically this is known as "likelihood" - it's a fun concept to mull over. 
                    I enjoy STEM topics, but find the most joy in creating experiences for others. 
                    Whether it be for my professional teams, or for my D&D teams, 
                    I love to create experiences where people grow and find success.
                </p>
            </div>
            <div>
                <h3>As A Developer</h3>
                <p>As an interactive developer, my primary aim is to create an experience and 
                    communicate an understanding of the user while effectively representing a 
                    brand's voice in the applications I build. I am versed in numerous web development technologies including, but not limited to - 
                    HTML, CSS, JavaScript, Bootstrap, Node, Express, and MySQL. My current studies include 
                    Three.js, React and Yuka AI. One thing I love about this industry is that there 
                    is always something new to learn. </p>
            </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>Project 1</h3>
            <p>Project description.</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>Project description</p>
          </div>
          <div className="project">
            <h3>Project 3</h3>
            <p>Project description</p>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Email: </p>
          <p>LinkedIn:</p>
        </section>
      </main>
    </>
  )
}

export default App
