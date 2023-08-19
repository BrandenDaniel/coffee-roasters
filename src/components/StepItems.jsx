import { fraunces, barlow } from "../ultils/fonts";
import chevron from "../assets/images/icons/chevron.svg";
import Image from "next/image";

const StepItems = ({ options, setStep, open, step, selected, setSelected }) => {
  const handleSetSelect = (title) => {
    setSelected(title);
  };

  const addStep = () => {
    setStep(step + 1);
  };

  const scrollToView = () => {
    document.getElementById(options.nextId).scrollIntoView();
  };

  return (
    <div
      className={`plan__steps-items ${open ? "plan__steps-items--open" : ""}`}
      id={`${options.id}`}
    >
      <h3>
        {options.question} <Image src={chevron} />
      </h3>
      <div>
        {options.options.map((item) => (
          <button
            key={item.title}
            onClick={() => {
              addStep();
              setTimeout(scrollToView, 100);
              clearTimeout(scrollToView);
              handleSetSelect(item.title);
            }}
            className={selected == item.title ? "plan__steps-items-active" : ""}
          >
            <h4 className={fraunces.className}>{item.title}</h4>
            <p className={barlow.className}> {item.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepItems;
