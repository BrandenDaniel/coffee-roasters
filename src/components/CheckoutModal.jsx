import { fraunces, barlow } from "@/ultils/fonts";
import Summary from "./Summary";

const CheckoutModal = ({
  stepOne,
  stepTwo,
  stepThree,
  stepFour,
  stepFive,
  calculateShipping,
}) => {
  const closeModal = () => {
    document.querySelector(".plan__checkout-modal").close();
    document.querySelector(".plan__checkout-moda-inner");
    document.body.style.overflow = "auto";
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const theEnd = () => {
    document.querySelector(".plan__checkout-modal button").textContent =
      "End of project";
    document.querySelector(
      ".plan__checkout-modal-price-mobile button"
    ).textContent = "End of project";
  };

  return (
    <dialog className="plan__checkout-modal" onClick={closeModal}>
      <div className="plan__checkout-modal-inner" onClick={stopPropagation}>
        <h1>Order Summary</h1>
        <div className="plan__checkout-modal-summary">
          <Summary
            stepOne={stepOne}
            stepTwo={stepTwo}
            stepThree={stepThree}
            stepFour={stepFour}
            stepFive={stepFive}
          />

          <small className={barlow.className}>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.
          </small>
          <div className="plan__checkout-modal-price-default">
            <span>${Number.parseFloat(calculateShipping).toFixed(2)} / mo</span>
            <button
              className={`primary-btn ${fraunces.className}`}
              onClick={theEnd}
            >
              Checkout
            </button>
          </div>

          <div className="plan__checkout-modal-price-mobile">
            <button
              className={`primary-btn ${fraunces.className}`}
              onClick={theEnd}
            >
              Checkout - ${Number.parseFloat(calculateShipping).toFixed(2)} / mo
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default CheckoutModal;
