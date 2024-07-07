import './reset.css'
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
        <Header />
         <Routes>
            {/* <Route exact path="/" element={<Home />} /> */}
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Resume" element={<Resume />} />
          </Routes>
      {/* <main>
        <About />

        <Projects />

        <Contact /> 
      </main> */}

    {/* <Footer /> */}
    </>
  )
}

export default App
