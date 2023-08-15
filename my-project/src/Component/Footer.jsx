import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="font-semibold border bg-gray-300 h-12 flex justify-between px-10 py-5 items-center">
      <Link to="/about">
        <div className=" hover:text-sky-500">About Us</div>
      </Link>
      <Link to="/t&c">
        <div className=" hover:text-sky-500">T&C</div>
      </Link>
      <Link to="/privacy-policy">
        <div className=" hover:text-sky-500">Privacy Policy</div>
      </Link>

      <Link to="/help">
        <div className=" hover:text-sky-500">Help</div>
      </Link>

      <Link to="/contact">
        <div className=" hover:text-sky-500">Contact Us</div>
      </Link>
    </div>
  );
};
export default Footer;
