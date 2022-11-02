import React from "react";
import Card from "./Components/Card";

import food10 from "../../assets/gallery/food10.jpg";
import food2 from "../../assets/gallery/food2.jpg";
import food3 from "../../assets/gallery/food3.jpg";
import food4 from "../../assets/gallery/food4.png";

import place1 from "../../assets/gallery/place1.jpg";
import place2 from "../../assets/gallery/place2.jpg";
import place3 from "../../assets/gallery/place3.png";
import place4 from "../../assets/gallery/place4.png";
import place5 from "../../assets/gallery/place5.png";

function Gallery() {
  return (
    <div className="text-white my-3">
      <div className="flex justify-center items-center">
        <div className="bg-secondary w-[1.5rem] h-[2px]"></div>
        <p className="text-2xl px-1">Our Gallery</p>
        <div className="bg-secondary w-[1.5rem] h-[2px]"></div>
      </div>
      <div className="text-center mb-3 mx-3">
        <p>Uncover the essence of our venue and cuisine...</p>
      </div>
      <div className="grid lg:grid-cols-3 2xl:grid-cols-3  [&>*]:my-3 px-6 [&>*]:p-4">
        <Card pic={place1} isBorderLeft={true} />
        <Card pic={place2} isBorderLeft={false} />
        <Card pic={place3} isBorderLeft={true} />
        <Card pic={place4} isBorderLeft={false} />
        <Card pic={place5} isBorderLeft={true} />
        <Card pic={food2} isBorderLeft={false} />
        <Card pic={food3} isBorderLeft={true} />
        <Card pic={food4} isBorderLeft={false} />
      </div>
    </div>
  );
}

export default Gallery;
