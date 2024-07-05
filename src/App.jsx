import './reset.css'
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import dOL from './assets/Digital_Orrery_Logo.png'

function App() {

  return (
    <>
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
