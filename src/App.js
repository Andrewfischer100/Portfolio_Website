import './App.scss';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/layout'
import About from './components/About';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact';

function App() {
  return (
   <>
   <Sidebar />
   
  <Routes>
    <Route path="/" element={<Layout />} />
    <Route path = "about" element={<About />} />
    <Route path = "contact" element ={<Contact />}/>
    </Routes>
  </>
  );
}

export default App;
