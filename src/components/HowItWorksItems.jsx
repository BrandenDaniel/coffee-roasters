import { barlow } from "../ultils/fonts";

const HowItWorksItems = () => {
  const content = [
    {
      step: "01",
      todo: "Pick your coffee",
      instruction:
        "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
    },
    {
      step: "02",
      todo: "Choose the frequency",
      instruction:
        "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
    },
    {
      step: "03",
      todo: "Receive and enjoy!",
      instruction:
        "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
    },
  ];

  return (
    <>
      {content.map((item) => (
        <div>
          <h3>{item.step}</h3>
          <h4>{item.todo}</h4>
          <p className={barlow.className}>{item.instruction}</p>
        </div>
      ))}
    </>
  );
};

export default HowItWorksItems;
