import Sidebar from '../Sidebar';
import Home from '../Home';

import './index.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return ( 
    <div className='App'>
    <Sidebar/>
    <Home/>
    <div className ='Page'>
        <span className='tags top-tags'></span>
        
        <Outlet />

        <span className='tags'>
        
        <br />
        <span className='bottom-tag-html'></span>
        </span>
    </div>
    </div>
    
    )
}

export default Layout