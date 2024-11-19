import {NavLink} from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink className="navlink" to={'/'} end>Home</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to={'/favorites'} end>Favorites</NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to={'/credits'} end>Credits</NavLink>
                </li>
            </ul>
        </nav>
    );
}