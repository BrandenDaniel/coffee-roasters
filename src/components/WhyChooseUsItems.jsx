import Image from "next/image";
import Bean from "../assets/images/icons/icon-coffee-bean.svg";
import Gift from "../assets/images/icons/icon-gift.svg";
import Truck from "../assets/images/icons/icon-truck.svg";
import { barlow } from "../ultils/fonts";

const WhyChooseUsItems = ({ fontFamily }) => {
  const content = [
    {
      imagePath: Bean,
      benefit: "Best quality",
      desc: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
    },
    {
      imagePath: Gift,
      benefit: "Exclusive benefits",
      desc: "Special offers and swag when you subscribe, including 30% off your first shipment.",
    },
    {
      imagePath: Truck,
      benefit: "Free shipping",
      desc: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
    },
  ];

  return (
    <>
      {content.map((item) => (
        <div>
          <Image src={item.imagePath} alt={item.benefit} />

          <div>
            <h3>{item.benefit}</h3>
            <p className={barlow.className}>{item.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChooseUsItems;
