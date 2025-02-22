import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer">
      <div className="social">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
      </div>
      <p>Hamro Constuctions © {new Date().getFullYear()}</p>
      <p>All rights reserved</p>
    </div>
  );
}
