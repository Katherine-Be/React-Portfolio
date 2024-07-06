import './reset.css'
import './App.css';
// import Canvas from './components/Canvas';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Route,Routes } from 'react-router-dom';

function App() {

  return (
    <>
    {/* <Canvas /> // May use later for three.js*/}
      <Header />


      <main>
        <About />

        <Projects />

        <Contact /> 
      </main>
      <div>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
    {/* <Footer /> */}
    </>
  )
}

export default App
