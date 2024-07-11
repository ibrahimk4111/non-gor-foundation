import About from "@/components/information/About";
import Link from "next/link";
import { paths } from "@/utils/paths";
import Footstep from "@/components/footStep/Footstep";

const page = () => {
  return (
    <div>
      <div>
        <Footstep>
          <Link
            href={paths.home}
            className=" cursor-pointer hover:text-green-800 "
          >
            Home
          </Link>{" "}
          / <span className=" text-green-800 ">Activities</span>
        </Footstep>
      </div>
      <About />
    </div>
  );
};

export default page;
