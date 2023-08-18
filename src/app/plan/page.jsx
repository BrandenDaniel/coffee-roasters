import "../../assets/sass/pages/plan.scss";
import "../../assets/sass/components/ui.scss";
import { barlow } from "../../ultils/fonts";
import HowItWorksItems from "@/components/HowItWorksItems";
import Steps from "@/components/Steps";

const page = () => {
  return (
    <div className="plan">
      <header className="plan__banner banner ">
        <h1>Create a plan</h1>
        <p className={barlow.className}>
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </header>

      <div className="how-it-works">
        <div className="how-it-works-items">
          <HowItWorksItems />
        </div>
      </div>

      <div className="plan__steps">
        <Steps />
      </div>
    </div>
  );
};

export default page;
