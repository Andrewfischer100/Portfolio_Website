import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoF from '../../assets/images/F.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className= 'nav-bar'>
        <Link className ='logo' to ='/'>
        <img src ={LogoF} alt="logo"></img>
   

        </Link>
        
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color ="#EE4B2B"/>
                </NavLink>

            <NavLink exact="true" activeclassname="active" className ="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color ="#EE4B2B"/>
                </NavLink>

             <NavLink exact="true" activeclassname="active" className ="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color ="#EE4B2B"/>
                </NavLink>
        </nav>
        <ul>
            <li>
                <a target ="_blank" rel='noreferrer' href='https://www.linkedin.com/in/afischer100/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#EE4B2B"/>
                </a>
            </li>
            <li>
                <a target ="_blank" rel='noreferrer' href='https://github.com/Andrewfischer100'>
                    <FontAwesomeIcon icon={faGithub} color="#EE4B2B"/>
                </a>
            </li>

        </ul>
    </div>
)

export default Sidebar