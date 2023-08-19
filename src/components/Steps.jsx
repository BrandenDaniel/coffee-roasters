"use client";
import { useState } from "react";
import StepItems from "./StepItems";

const Steps = () => {
  const [step, setStep] = useState(1);

  const drinkingMethod = {
    id: "method",
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
      <StepItems
        options={drinkingMethod}
        step={step}
        active={true}
        setStep={setStep}
      />
      <StepItems
        options={type}
        step={step}
        active={step >= 2 ? true : false}
        setStep={setStep}
      />
      <StepItems
        options={quantity}
        step={step}
        active={step >= 3 ? true : false}
        setStep={setStep}
      />
      <StepItems
        options={grind}
        step={step}
        active={step >= 4 ? true : false}
        setStep={setStep}
      />
      <StepItems
        options={delivery}
        step={step}
        active={step >= 5 ? true : false}
        setStep={setStep}
      />
    </>
  );
};

export default Steps;
