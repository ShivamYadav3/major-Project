import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="font-semibold border bg-slate-300 h-10 flex justify-between px-10 py-5 items-center">
      <Link to="/about">
        <div>About Us</div>
      </Link>
      <Link to="/t&c">
        <div>T&C</div>
      </Link>
      <Link to="/privacy-policy">
        <div>Privacy Policy</div>
      </Link>

      <Link to="/help">
        <div>Help</div>
      </Link>

      <Link to="/contact">
        <div>Contact Us</div>
      </Link>
    </div>
  );
};
export default Footer;
