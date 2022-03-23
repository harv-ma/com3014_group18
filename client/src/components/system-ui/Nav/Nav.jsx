import "./Nav.scss"
import { Link } from "react-router-dom"


const Nav = () => {
  return (
    <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
    </div>
  );
}

export default Nav;
