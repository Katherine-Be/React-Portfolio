import './reset.css'
import './App.css';
// import Canvas from './components/Canvas';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <>
    {/* <Canvas /> */}
      <Header />

      <main>
        <About />

        <Projects />

        <Contact /> 
      </main>

    {/* <Footer /> */}
    </>
  )
}

export default App
