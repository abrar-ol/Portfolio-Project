import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import logoA from '../../assets/images/logo-a.png'
import subLogoA from '../../assets/images/abrarAlolyan.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={logoA} alt="logo" />
      <img className="sub-logo" src={subLogoA} alt="abrar" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#40404e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#40404e" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#40404e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/abrar-alolyan-843494178/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#40404e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/abrar-ol"
        >
          <FontAwesomeIcon icon={faGithub} color="#40404e" />
        </a>
      </li>
    
    </ul>
  </div>
)
export default Sidebar
