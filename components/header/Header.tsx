
import MiddleBar from "./headerComponents/MiddleBar"
import NavBar from "./headerComponents/NavBar"
import TopBar from "./headerComponents/TopBar"

const Header:React.FC = () => {
  return (
    <div className=" bg-slate-100">
        <TopBar />
        <MiddleBar />
        <NavBar />
    </div>
  )
}

export default Header