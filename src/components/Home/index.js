import { Link } from 'react-router-dom';
import './index.scss';
import Pickle_springs from '../../assets/images/Pickle_Springs.svg'

const Home = () => {


    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                Andrew</h1>
                <br />
                <h2> Web Developer/Designer</h2>
                <h1>
                I focus on emphasizing you
               
                </h1>
               
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <div className='image-container'> 
           

            
            </div>
        </div>
    );
}

export default Home

