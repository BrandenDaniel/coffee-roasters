"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/images/logo.svg";
import HamburgerIcon from "../assets/images/icons/hamburger.svg";
import CancelIcon from "../assets/images/icons/cancel.svg";
import "../assets/sass/components/nav.scss";
import { barlow, fraunces } from "../ultils/fonts";
import { useState } from "react";

const Nav = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const navToggle = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  return (
    <nav className="nav">
      <Link href="/">
        <Image
          src={Logo}
          style={{ maxWidth: "163px", height: "100%", width: "100%" }}
          className="nav__logo-brand"
          alt="logo"
        />
      </Link>

      <div className="nav__default">
        <div className={`nav__default-links ${barlow.className}`}>
          <ul>
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/about-us">ABOUT US</Link>
            </li>
            <li>
              <Link href="/create-your-plan">CREATE YOUR PLAN</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="nav__mobile">
        <button className="nav__mobile-toggle" onClick={navToggle}>
          <Image src={isMobileNavActive ? CancelIcon : HamburgerIcon} />
        </button>

        <div
          className={`nav__mobile-sidebar ${
            isMobileNavActive ? "nav__mobile-sidebar--active" : ""
          }`}
        >
          <div className={`nav__mobile-sidebar-links ${fraunces.className}`}>
            <ul>
              <li>
                <Link href="/" onClick={navToggle}>
                  HOME
                </Link>
              </li>
              <li>
                <Link href="about-us" onClick={navToggle}>
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link href="create-your-plan" onClick={navToggle}>
                  CREATE YOUR PLAN
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
