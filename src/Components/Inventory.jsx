import React from "react";
import Biriyani from "./Biriyani";
import awadhi from "../Assets/awadhi.jpg";
import kolkata from "../Assets/kolkata.jpg";
import sindhi from "../Assets/sindhi.png";
import memoni from "../Assets/memoni.jpg";
import malabar from "../Assets/malabar.jpg";
import ambur from "../Assets/ambur.jpg";

const Inventory = () => {
  const biriyani = [
    {
      name: "Awadhi",
      note: "celebration dish and is typically cooked ‘dum’ style",
      qty: 6,
      img: awadhi,
    },
    {
      name: "Kolkata",
      note: "flavored with mild spices in the rice and spicy chicken",
      qty: 10,
      img: kolkata,
    },
    {
      name: "Sindhi",
      note: "bold flavor from chilies and spices and has potatoes added in as well",
      qty: 12,
      img: sindhi,
    },
    {
      name: "Memoni",
      note: "made with potatoes, chilies, and spices, but typically also uses lamb and tomatoes",
      qty: 12,
      img: memoni,
    },
    {
      name: "Malabar",
      note: "features a paste made of green chiles, cinnamon, cloves, fennel, cardamom, and peppercorns",
      qty: 0,
      img: malabar,
    },
    {
      name: "Ambur",
      note: "flavor from the chicken added to the dish as the rice is mildly spiced",
      qty: 18,
      img: ambur,
    },
  ];

  return (
    <section className="grid-cols-2 gap-4 md:grid md:max-w-7xl md:mx-auto">
      {biriyani.map((biriyani, id) => (
        <Biriyani
          key={id}
          name={biriyani.name}
          note={biriyani.note}
          qty={biriyani.qty}
          img={biriyani.img}
        />
      ))}
    </section>
  );
};

export default Inventory;
