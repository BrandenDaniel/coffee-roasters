import { fraunces, barlow } from "../ultils/fonts";
import chevron from "../assets/images/icons/chevron.svg";
import Image from "next/image";

const StepItems = ({
  options,
  open,
  selected,
  setSelected,
  stepStatus,
  setStepStatus,
  disabled,
  setCurrentActive,
  shippingPrices,
}) => {
  const handleSetSelect = (title) => {
    setSelected(title);
    shippingPrices && shippingPrices(title);
  };

  const handleSetStepStatus = (options) => {
    setStepStatus({ ...stepStatus, [options.id]: true });
  };

  const scrollToView = () => {
    document.getElementById(options.nextId).scrollIntoView();
  };

  return (
    <div
      className={`plan__steps-items ${
        open ? "plan__steps-items--open" : ""
      } ${disabled}`}
      id={`${options.id}`}
    >
      <h3>
        {options.question} <Image src={chevron} alt="" />
      </h3>
      <div>
        {options.options.map((item) => (
          <button
            key={item.title}
            onClick={() => {
              setTimeout(scrollToView, 100);
              clearTimeout(scrollToView);
              handleSetStepStatus(options);
              handleSetSelect(item.title);
              setCurrentActive(options.nextId);
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
