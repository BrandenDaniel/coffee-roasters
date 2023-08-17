import Link from "next/link";

import { fraunces, barlow } from "../../ultils/fonts";

const page = () => {
  return (
    <div className="about-us">
      <header className="about-us__banner banner banner--overlay">
        <h1 className={`${fraunces.className}`}>About Us</h1>
        <p className={`${barlow.className}`}>
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </header>
    </div>
  );
};

export default page;
