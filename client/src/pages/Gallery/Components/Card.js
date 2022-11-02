import React from "react";
function Card({ pic, isBorderLeft }) {
  return (
    <div className="flex justify-center items-center">
      <div className="border-2 border-primary rounded-2xl">
        <img
          style={{
            translate: isBorderLeft ? "2% 2%" : "-2% -2%",
          }}
          className="h-[300px] w-[500px] rounded-2xl"
          src={pic}
          alt=""
        />
      </div>
    </div>
  );
}

export default Card;
