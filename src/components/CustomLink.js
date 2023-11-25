import { Link } from "react-router-dom";

function CustomLink({ to, children, className, onClick }) {
  return (
    <li className={`${className} ml-3 mr-3`}>
      <Link to={to} className="navbar-link font-medium" onClick={onClick}>
        {children}
      </Link>
    </li>
  );
}

export default CustomLink;
