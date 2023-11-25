import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare
} from "react-icons/fa";
import Button from "./Button";

const linksStyling = "flex flex-col gap-y-3 text-small";

function Footer() {
  return (
    <div className="footer">
      <section className="mx-5 mb-10">
        <div className="upper-footer flex flex-col items-center md:justify-center mb-12">
          <div className="text-center text-xl font-bold text-white tracking-wider mb-10">
            <p className="mb-10 md:mb-0">
              Join the Adventure newsletter to receive our best vacation deals.
            </p>
            <p>You can unsubscribe at any time.</p>
          </div>
          <form className="flex flex-col md:flex-row items-center justify-center w-4/5">
            <input
              type="email"
              placeholder="Enter Email"
              className={`p-4 mb-5 md:mb-0 md:mr-3 outline-none border border-black w-full md:w-[31.25rem] rounded-lg`}
            />
            <Button
              className="text-white hover:text-black hover:bg-white font-medium rounded-lg w-full md:w-fit flex justify-center duration-300"
              style={{ padding: "1rem 1.05rem" }}
            >
              Subscribe
            </Button>
          </form>
        </div>
        <div className="lower-footer flex flex-col md:flex-row">
          <div className="footer-link-wrapper flex w-full justify-around mb-10">
            <div className="footer-link-items">
              <h2>About us</h2>
              <div className={linksStyling}>
                <Link to="/sign-up">How it works</Link>
                <Link to="/">Testimonials</Link>
                <Link to="/services">Careers</Link>
                <Link to="/">Investors</Link>
                <Link to="/">Terms of service</Link>
              </div>
            </div>
            <div className="footer-link-items">
              <h2>Contact Us</h2>
              <div className={linksStyling}>
                <Link to="/">Contact</Link>
                <Link to="/">Support</Link>
                <Link to="/">Destination</Link>
                <Link to="/">Sponsorship</Link>
              </div>
            </div>
          </div>
          <div className="footer-link-wrapper flex w-full justify-around">
            <div className="footer-link-items">
              <h2>Videos</h2>
              <div className={linksStyling}>
                <Link to="/">Submit Video</Link>
                <Link to="/">Ambassadors</Link>
                <Link to="/">Agency</Link>
                <Link to="/">Influencer</Link>
              </div>
            </div>
            <div className="footer-link-items">
              <h2>Social Media</h2>
              <div className={linksStyling}>
                <Link to="/">Instagram</Link>
                <Link to="/">Facebook</Link>
                <Link to="/services">Youtube</Link>
                <Link to="/">Twitter</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 bg-white text-black">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="text-xl font-bold">
              <h1 className="text-black">TRVL</h1>
            </Link>
          </div>
          <small className="font-bold text-sm">TRVL &copy; 2020</small>
          <div className="flex items-center gap-2">
            <Link to="/" target="_blank" aria-label="Facebook">
              <FaFacebookSquare className="text-black text-2xl" />
            </Link>

            <Link to="/" target="_blank" aria-label="instagram">
              <FaInstagramSquare className="text-black text-2xl" />
            </Link>

            <Link to="/" target="_blank" aria-label="linkedin">
              <FaLinkedin className="text-black text-2xl" />
            </Link>

            <Link
              to="/"
              target="_blank"
              aria-label="twitter"
              className="social-icon-link twitter"
            >
              <FaTwitterSquare className="text-black text-2xl" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
