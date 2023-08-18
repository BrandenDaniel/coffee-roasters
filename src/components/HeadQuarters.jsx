import React from "react";
import UK from "../assets/images/icons/illustration-uk.svg";
import Canada from "../assets/images/icons/illustration-canada.svg";
import Australia from "../assets/images/icons/illustration-australia.svg";
import Image from "next/image";
import { barlow } from "../ultils/fonts";

const HeadQuarters = () => {
  const content = [
    {
      map: UK,
      country: "United Kingdom",
      address: ["68  Asfordby Rd", "Alcaston", "SY6 1YA", "+44 1241 918425"],
    },
    {
      map: Canada,
      country: "Canada",
      address: [
        "1528  Eglinton Avenue",
        "Toronto",
        "Ontario M4P 1A6",
        "+1 416 485 2997",
      ],
    },
    {
      map: Australia,
      country: "Australia",
      address: ["36 Swanston Street", "Kewell", "Victoria", "+61 4 9928 3629"],
    },
  ];

  return (
    <>
      {content.map((item) => (
        <div>
          <Image src={item.map} />
          <h4>{item.country}</h4>
          <div>
            {item.address.map((item) => (
              <p className={barlow.className}>{item}</p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default HeadQuarters;
