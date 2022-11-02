import React from "react";
function Card({ pic }) {
  return (
    <div className="flex justify-center">
      <button className="m-4 border-2 border-primary rounded-2xl">
        <img className="rounded-2xl h-[300px]" src={pic} alt="" />
      </button>
    </div>
  );
}

export default Card;
