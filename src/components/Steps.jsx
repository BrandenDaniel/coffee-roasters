"use client";
import { useState } from "react";
import StepItems from "./StepItems";
import { barlow, fraunces } from "@/ultils/fonts";

const Steps = () => {
  const [step, setStep] = useState(1);

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
    nextId: "grind",
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
    question: "How often should we deliver?",
    options: [
      {
        title: "Every week",
        desc: "$7.20 per shipment. Includes free first-class shipping.",
      },
      {
        title: "Every 2 weeks",
        desc: "$9.60 per shipment. Includes free priority shipping.",
      },
      {
        title: "Every month",
        desc: "$12.00 per shipment. Includes free priority shipping.",
      },
    ],
  };

  return (
    <>
      <div className="plan__steps-sidebar">
        <div>
          <div className={step == 1 ? "plan__steps-sidebar-active" : ""}>
            <span>01</span>
            <p>Preferences</p>
          </div>
          <div className={step == 2 ? "plan__steps-sidebar-active" : ""}>
            <span>02</span>
            <p>Bean Type</p>
          </div>
          <div className={step == 3 ? "plan__steps-sidebar-active" : ""}>
            <span>03</span>
            <p>Quantity</p>
          </div>
          <div className={step == 4 ? "plan__steps-sidebar-active" : ""}>
            <span>04</span>
            <p>Grind Option</p>
          </div>
          <div className={step >= 5 ? "plan__steps-sidebar-active" : ""}>
            <span>05</span>
            <p>Deliveries</p>
          </div>
        </div>
      </div>

      <div className="plan__steps-container">
        <StepItems
          options={preference}
          step={step}
          open={true}
          setStep={setStep}
          selected={stepOne}
          setSelected={setStepOne}
        />
        <StepItems
          options={type}
          step={step}
          open={step >= 2 ? true : false}
          setStep={setStep}
          selected={stepTwo}
          setSelected={setStepTwo}
        />
        <StepItems
          options={quantity}
          step={step}
          open={step >= 3 ? true : false}
          setStep={setStep}
          selected={stepThree}
          setSelected={setStepThree}
        />
        <StepItems
          options={grind}
          step={step}
          open={step >= 4 ? true : false}
          setStep={setStep}
          selected={stepFour}
          setSelected={setStepFour}
        />
        <StepItems
          options={delivery}
          step={step}
          open={step >= 5 ? true : false}
          setStep={setStep}
          selected={stepFive}
          setSelected={setStepFive}
        />

        <div className="plan__steps-summary">
          <h3 className={barlow.className}>ORDER SUMMARY</h3>
          <p>
            “I drink my coffee as Filter, with a Decaf type of bean. 250g ground
            ala Cafetiére, sent to me Every Week.”
          </p>
        </div>

        <button
          disabled={step >= 5 ? false : true}
          className={`primary-btn ${fraunces.className}`}
        >
          Create my plan!
        </button>
      </div>
    </>
  );
};

export default Steps;
