import NavBar from "./headerComponents/NavBar";
import { Button } from "../ui/button";
import { auth } from "@/components/auth/auth";
import { paths } from "@/utils/paths";
import Link from "next/link";

const Header = async () => {
  return (
    <div>
      <NavBar />
    </div>
  );
};

export default Header;
