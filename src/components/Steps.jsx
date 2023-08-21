"use client";
import { useState } from "react";
import StepItems from "./StepItems";
import { barlow, fraunces } from "@/ultils/fonts";
import Link from "next/link";
import Summary from "./Summary";
import CheckoutModal from "./CheckoutModal";

const Steps = () => {
  const [stepStatus, setStepStatus] = useState({
    preference: false,
    type: false,
    quantity: false,
    grind: false,
    delivery: false,
  });

  const [currentActive, setCurrentActive] = useState("preference");

  const [stepOne, setStepOne] = useState("");

  const [stepTwo, setStepTwo] = useState("");

  const [stepThree, setStepThree] = useState("");

  const [stepFour, setStepFour] = useState("");

  const [stepFive, setStepFive] = useState("");

  const preference = {
    id: "preference",
    nextId: "type",
    question: "How do you drink your coffee?",
    options: [
      {
        title: "Capsule",
        desc: "Compatible with Nespresso systems and similar brewers",
      },
      {
        title: "Filter",
        desc: "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        title: "Espresso",
        desc: "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  };

  const type = {
    id: "type",
    nextId: "quantity",
    question: "What type of coffee?",
    options: [
      {
        title: "Single Origin",
        desc: "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        title: "Decaf",
        desc: "Just like regular coffee, except the caffeine has been removed",
      },
      {
        title: "Blended",
        desc: "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  };

  const quantity = {
    id: "quantity",
    nextId: stepOne == "Capsule" ? "delivery" : "grind",
    question: "How much would you like?",
    options: [
      {
        title: "250g",
        desc: "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        title: "500g",
        desc: "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        title: "1000g",
        desc: "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  };

  const grind = {
    id: "grind",
    nextId: "delivery",
    question: "Want us to grind them?",
    options: [
      {
        title: "Wholebean",
        desc: "Best choice if you cherish the full sensory experience",
      },
      {
        title: "Filter",
        desc: "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        title: "Cafetiére",
        desc: "Course ground beans specially suited for french press coffee",
      },
    ],
  };

  const delivery = {
    id: "delivery",
    nextId: "summary",
    question: "How often should we deliver?",
    options: [
      {
        title: "Every Week",
        desc: "$7.20 per shipment. Includes free first-class shipping.",
      },
      {
        title: "Every 2 Weeks",
        desc: "$9.60 per shipment. Includes free priority shipping.",
      },
      {
        title: "Every Month",
        desc: "$12.00 per shipment. Includes free priority shipping.",
      },
    ],
  };

  const showDelivery = (stepStatus) => {
    if (stepStatus.grind) {
      return true;
    } else if (stepOne == "Capsule" && stepStatus.quantity) {
      return true;
    } else {
      return false;
    }
  };

  const sidebarScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView();
  };

  const openSummaryModal = () => {
    document.querySelector(".plan__checkout-modal").showModal();
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <div className="plan__steps-sidebar">
        <div>
          <button
            className={`${
              currentActive == "preference" ? "plan__steps-sidebar-active" : ""
            } ${fraunces.className}`}
            onClick={() => {
              sidebarScroll("preference");
            }}
          >
            <span>01</span>
            <p>Preferences</p>
          </button>
          <button
            className={`${
              currentActive == "type" ? "plan__steps-sidebar-active" : ""
            } ${fraunces.className}`}
            onClick={() => {
              sidebarScroll("type");
            }}
          >
            <span>02</span>
            <p>Bean Type</p>
          </button>
          <button
            className={`${
              currentActive == "quantity" ? "plan__steps-sidebar-active" : ""
            } ${fraunces.className}`}
            onClick={() => {
              sidebarScroll("quantity");
            }}
          >
            <span>03</span>
            <p>Quantity</p>
          </button>
          <button
            className={`${
              currentActive == "grind" ? "plan__steps-sidebar-active" : ""
            } ${fraunces.className} ${
              stepOne == "Capsule" ? "plan__steps-sidebar-disabled" : ""
            }`}
            onClick={() => {
              sidebarScroll("grind");
            }}
          >
            <span>04</span>
            <p>Grind Option</p>
          </button>
          <button
            className={`${
              currentActive == "summary" ? "plan__steps-sidebar-active" : ""
            } ${fraunces.className}`}
            onClick={() => {
              sidebarScroll("delivery");
            }}
          >
            <span>05</span>
            <p>Deliveries</p>
          </button>
        </div>
      </div>

      <div className="plan__steps-container">
        <StepItems
          options={preference}
          open={true}
          selected={stepOne}
          setSelected={setStepOne}
          stepStatus={stepStatus}
          setStepStatus={setStepStatus}
          setCurrentActive={setCurrentActive}
        />
        <StepItems
          options={type}
          open={stepStatus.preference ? true : false}
          selected={stepTwo}
          setSelected={setStepTwo}
          stepStatus={stepStatus}
          setStepStatus={setStepStatus}
          setCurrentActive={setCurrentActive}
        />
        <StepItems
          options={quantity}
          open={stepStatus.type ? true : false}
          selected={stepThree}
          setSelected={setStepThree}
          stepStatus={stepStatus}
          setStepStatus={setStepStatus}
          setCurrentActive={setCurrentActive}
        />
        <StepItems
          options={grind}
          open={stepStatus.quantity ? true : false}
          disabled={stepOne == "Capsule" ? "plan__steps-items--disabled" : ""}
          selected={stepFour}
          setSelected={setStepFour}
          stepStatus={stepStatus}
          setStepStatus={setStepStatus}
          setCurrentActive={setCurrentActive}
        />
        <StepItems
          options={delivery}
          open={showDelivery(stepStatus)}
          selected={stepFive}
          setSelected={setStepFive}
          stepStatus={stepStatus}
          setStepStatus={setStepStatus}
          setCurrentActive={setCurrentActive}
        />

        <div className="plan__steps-summary" id="summary">
          <h3 className={barlow.className}>ORDER SUMMARY</h3>
          <Summary
            stepOne={stepOne}
            stepTwo={stepTwo}
            stepThree={stepThree}
            stepFour={stepFour}
            stepFive={stepFive}
          />
        </div>

        <button
          disabled={stepStatus.delivery ? false : true}
          className={`primary-btn ${fraunces.className}`}
          onClick={openSummaryModal}
        >
          Create my plan!
        </button>
        <CheckoutModal
          stepOne={stepOne}
          stepTwo={stepTwo}
          stepThree={stepThree}
          stepFour={stepFour}
          stepFive={stepFive}
        />
      </div>
    </>
  );
};

export default Steps;
