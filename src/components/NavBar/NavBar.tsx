import { Link, NavLink } from "react-router-dom";
import type { NavBarProps } from "../../interfaces";
import "./NavBar.css"
const NavBar = ({logo,items,btn}: NavBarProps) => {
    return (
        <nav>
          <h1>{logo}</h1>
          <div>
            <ul>
            {items.map((item,index) => {
                return(
                    <li key={index}><NavLink to={item.path} className={({ isActive }) => (isActive ? "active" : "")}>
                        {item.icon}
                        {item.content}
                        </NavLink></li>
                )
            })}
            </ul> 
            <button><Link to={btn.path}>{btn.content}</Link></button>
          </div>
        </nav>
    )
}

export default NavBar
