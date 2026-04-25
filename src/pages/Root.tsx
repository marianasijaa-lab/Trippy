import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import type { NavItem } from "../interfaces"
import { FaHouseUser } from "react-icons/fa"
import { RiContactsBook3Fill, RiInformation2Fill } from "react-icons/ri"
import { PiToolboxBold } from "react-icons/pi"

const navItems :Array<NavItem> =[
{
  icon: <FaHouseUser />,
  content:"Home",
  path:"/"
},
{
  icon: <RiInformation2Fill />,
  content:"about",
  path:"/about"
},
{
  icon: <PiToolboxBold />,
  content:"services",
  path:"/services"
},
{
  icon: <RiContactsBook3Fill />,
  content:"contact",
  path:"/contact"
}

]

const Root = () => {
  return (
    <>
    <NavBar 
     logo="Trippy"
      items={navItems}
      btn={
        {
           path:"/signup",
           content:"Sign Up"
        }
       
      }
    />
    <Outlet/>
    </>
  )
}

export default Root