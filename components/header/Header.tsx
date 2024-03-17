import MiddleBar from "./headerComponents/MiddleBar"
import NavBar from "./headerComponents/NavBar"
import TopBar from "./headerComponents/TopBar"

const Header:React.FC = () => {
  return (
    <div className=" max-w-[1280px] mx-auto">
        <TopBar />
        <MiddleBar />
        <NavBar />
    </div>
  )
}

export default Header