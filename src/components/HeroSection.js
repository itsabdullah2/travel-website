import "./HeroSection.css";
import { FaRegPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";

const btnStyles = "hover:bg-white hover:text-black duration-300";

function HeroSection() {
  return (
    <div className="hero-section relative h-screen w-full flex flex-col items-center justify-center">
      <h1 className="heading text-6xl font-bold text-center mb-5">
        ADVENTURE AWAITS
      </h1>
      <div className="btns flex items-center flex-col md:flex-row text-white font-bold">
        <Link to="/about">
          <Button
            to="/sign-up"
            className={`${btnStyles} mb-5 md:mr-5 md:mb-0 `}
          >
            GET STARTED
          </Button>
        </Link>
        <Button className={btnStyles}>
          WATCH TRAILER <FaRegPlayCircle className="ml-2" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
