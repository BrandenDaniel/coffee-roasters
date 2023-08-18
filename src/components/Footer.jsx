import { barlow } from "../ultils/fonts";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/images/logo-light.svg";
import Facebook from "../assets/images/icons/icon-facebook.svg";
import Twitter from "../assets/images/icons/icon-twitter.svg";
import Instagram from "../assets/images/icons/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Link href="/">
        <Image src={Logo} alt="logo" className="footer__logo"></Image>
      </Link>

      <div className={`footer__links ${barlow.className}`}>
        <ul>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/about-us">ABOUT US</Link>
          </li>
          <li>
            <Link href="/plan">CREATE YOUR PLAN</Link>
          </li>
        </ul>
      </div>

      <div className="footer__social-links">
        <Link href="/">
          <Image src={Facebook} alt="Facebook" />
        </Link>
        <Link href="/">
          <Image src={Twitter} alt="Twitter" />
        </Link>
        <Link href="/">
          <Image src={Instagram} alt="Instagram" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
