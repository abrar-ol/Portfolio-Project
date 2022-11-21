import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import logoA from '../../assets/images/logo-a.png'
import subLogoA from '../../assets/images/abrarAlolyan.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

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
        to="/"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#40404e" />
      </NavLink>
    </nav>
  </div>
)
export default Sidebar
