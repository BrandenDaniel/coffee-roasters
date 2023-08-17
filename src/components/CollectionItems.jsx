import Image from "next/image";
import GrandEspresso from "../assets/images/collection/image-gran-espresso.png";
import Planalto from "../assets/images/collection/image-planalto.png";
import Piccollo from "../assets/images/collection/image-piccollo.png";
import Danche from "../assets/images/collection/image-danche.png";
import { barlow } from "../ultils/fonts";

const CollectionItems = () => {
  const coffeCollection = [
    {
      name: "Gran Espresso",
      desc: "Light and flavorful blend with cocoa and black pepper for an intense experience",
      imagePath: GrandEspresso,
    },
    {
      name: "Planalto",
      desc: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
      imagePath: Planalto,
    },
    {
      name: "Piccollo",
      desc: "Mild and smooth blend featuring notes of toasted almond and dried cherry ",
      imagePath: Piccollo,
    },
    {
      name: "Danche",
      desc: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
      imagePath: Danche,
    },
  ];

  return (
    <>
      {coffeCollection.map((item) => (
        <div>
          <Image src={item.imagePath} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p className={barlow.className}>{item.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CollectionItems;
