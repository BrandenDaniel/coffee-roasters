import { fraunces } from "@/ultils/fonts";
import React from "react";

const Summary = ({ stepOne, stepTwo, stepThree, stepFour, stepFive }) => {
  return (
    <p className={fraunces.className}>
      “I drink my coffee {stepOne == "Capsule" ? "using " : "as "}
      <span className={stepOne == "" && "empty"}>{stepOne}</span> , with a{" "}
      <span className={stepTwo == "" && "empty"}>{stepTwo}</span> type of bean.{" "}
      {(stepOne == "Filter") | (stepOne == "Espresso") ? (
        <>
          <span className={stepThree == "" && "empty"}> {stepThree}</span>{" "}
          ground ala{" "}
          <span className={stepFour == "" && "empty"}>{stepFour}</span>, sent to
          me <span className={stepFive == "" && "empty"}>{stepFive}</span> .”
        </>
      ) : (
        <>
          <span className={stepThree == "" && "empty"}>{stepThree}</span> , sent
          to me <span className={stepFive == "" && "empty"}>{stepFive}</span> .”
        </>
      )}
    </p>
  );
};

export default Summary;
