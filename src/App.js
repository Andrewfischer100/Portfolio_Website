import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/layout'
import About from './components/About';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact';
import Design from './components/Design';
import Gallery from './components/Design'

function App() {
  return (
   <>
   <Sidebar />
   
  <Routes>
    <Route path="/" element={<Layout />} />
    <Route path = "about" element={<About />} />
    <Route path = "contact" element ={<Contact />}/>
    <Route path = "gallery" element ={<Gallery />}/>
    <Route path = "design" element ={<Design/>}/>
    <Route path = "illustration" element ={<illustration />}/>
    </Routes>
  </>
  );
}

export default App;
