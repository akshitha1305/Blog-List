// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="nav-logo">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-img"
      />
      <p className="wave-head">Wave</p>
    </div>
    <div className="nav-items">
      <Link to="/" className="item">
        Home
      </Link>
      <Link className="item" to="/about">
        About
      </Link>
      <Link className="item" to="/contact">
        Contact
      </Link>
    </div>
  </nav>
)

export default Header
