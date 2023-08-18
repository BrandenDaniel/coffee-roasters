import { fraunces, barlow } from "../ultils/fonts";
import chevron from "../assets/images/icons/chevron.svg";
import Image from "next/image";

const StepItems = ({ options, setStep, active, step }) => {
  const handleClick = () => {
    setStep(step + 1);
  };

  return (
    <div
      className={`plan__steps-items ${
        active ? "plan__steps-items--active" : ""
      }`}
      id={`${options.id}`}
    >
      <h3>
        {options.question} <Image src={chevron} />
      </h3>
      <div>
        {options.options.map((item) => (
          <a href={`#`} key={item.title} onClick={handleClick}>
            <h4 className={fraunces.className}>{item.title}</h4>
            <p className={barlow.className}> {item.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default StepItems;
