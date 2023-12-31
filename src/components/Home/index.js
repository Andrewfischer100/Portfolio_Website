import { Link } from 'react-router-dom';
import './index.scss';



const Home = () => {

    return(

        <div className="container home-page">
          <section>
            <div className="text-zone">
                <h1 >Hello, I'm  
                <span style={{color: "rgb(65, 192, 255);"}}> Andrew</span>
                <br />
                I focus on emphasizing <span style={{color: "indianred", opacity: "1"}}>you.</span>
                </h1>
                </div>
                <div className='links'>
                <Link to="/Design" className="flat-button">DESIGN</Link>
                <Link to="/illustration" className="flat-button">ILLUSTRATION</Link>
                </div>
			</section>
<div>
		
			</div>
    </div>
    );
}

export default Home

