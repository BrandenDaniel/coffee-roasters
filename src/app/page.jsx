import Link from "next/link";
import { barlow } from "../ultils/fonts";
import CollectionItems from "@/components/CollectionItems";
import WhyChooseUsItems from "@/components/WhyChooseUsItems";
import HowItWorksItems from "@/components/HowItWorksItems";

const page = () => {
  return (
    <div className="home">
      <header className="home__banner banner">
        <h1>Great coffee made simple.</h1>
        <p className={barlow.className}>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Link href="/plan" className="primary-btn">
          Create your plan
        </Link>
      </header>

      <div className="home__our-collection">
        <h2>our collection</h2>
        <div className="home__our-collection-items">
          <CollectionItems />
        </div>
      </div>

      <div className="home__why-choose-us">
        <div className="home__why-choose-us-header">
          <h2>Why choose us?</h2>
          <p className={barlow.className}>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>

        <div className="home__why-choose-us-items">
          <WhyChooseUsItems />
        </div>
      </div>

      <div className="how-it-works">
        <h2>How it works</h2>

        <div className="how-it-works-items">
          <HowItWorksItems />
        </div>

        <Link href="/plan" className="primary-btn">
          Create your plan
        </Link>
      </div>
    </div>
  );
};

export default page;
