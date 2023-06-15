// npm create vite@latest ./ -- --template react
// npm install -D tailwindcss
// npx tailwindcss init

// npm install --legacy-peer-devs @react-three/fiber @react-three/drei maath react-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom

import {BrowserRouter} from 'react-router-dom';
import {About ,Contact , Experience , Feedbacks ,Hero ,Navbar ,Tech,Works , StarsCanvas } from './components'
const  App = ()=> {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
