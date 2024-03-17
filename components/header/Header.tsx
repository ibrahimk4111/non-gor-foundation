import DonateForm from "../donateForm/DonateForm"
import MiddleBar from "./headerComponents/MiddleBar"
import NavBar from "./headerComponents/NavBar"
import TopBar from "./headerComponents/TopBar"

const Header:React.FC = () => {
  return (
    <div className=" bg-slate-100 pb-10">
        <TopBar />
        <MiddleBar />
        <NavBar />
        <DonateForm />
    </div>
  )
}

export default Header