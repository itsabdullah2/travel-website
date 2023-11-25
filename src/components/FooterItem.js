import { Link } from "react-router-dom";

function FooterItem({ title, to, children }) {
  return (
    <>
      <div className="footer-link-wrapper">
        <div className="footer-link-items">
          <h2>About us</h2>
          <Link to="/sign-up">How it works</Link>
          <Link to="/">Testimonials</Link>
          <Link to="/services">Careers</Link>
          <Link to="/">Investors</Link>
          <Link to="/">Terms of service</Link>
        </div>
        <div className="footer-link-items">
          <h2>Contact Us</h2>
          <Link to="/">Contact</Link>
          <Link to="/">Support</Link>
          <Link to="/">Destination</Link>
          <Link to="/">Sponsorship</Link>
        </div>
      </div>
      <div className="footer-link-wrapper">
        <div className="footer-link-items">
          <h2>Videos</h2>
          <Link to="/">Submit Video</Link>
          <Link to="/">Ambassadors</Link>
          <Link to="/">Agency</Link>
          <Link to="/">Influencer</Link>
        </div>
        <div className="footer-link-items">
          <h2>Social Media</h2>
          <Link to="/">Instagram</Link>
          <Link to="/">Facebook</Link>
          <Link to="/services">Youtube</Link>
          <Link to="/">Twitter</Link>
        </div>
      </div>
    </>
  );
}

export default FooterItem;
