import React from "react";
import food10 from "../../assets/gallery/food10.jpg";

function Home() {
  return (
    <div className="text-white">
      <div className="flex justify-center items-center my-3">
        <div className="bg-secondary w-[1.5rem] h-[2px]"></div>
        <p className="text-2xl px-1">Feel the vibe</p>
        <div className="bg-secondary w-[1.5rem] h-[2px]"></div>
      </div>
      <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 lg:px-10 2xl:px-10">
        <div className="flex justify-center items-center  px-6">
          <div className="lg:w-96 2xl:w-96">
            <h1 className="text-center text-3xl font-bold text-primary my-2">
              The Indian Table
            </h1>
            <p className="text-2xl">
              "All great deeds and all great thoughts have a ridiculous
              beginning. Great works are often born on a street corner or in a
              restaurant's revolving door."
            </p>
            <div className="py-2 flex justify-center items-center [&>*]:mx-4 [&>*]:text-xl my-2">
              <a
                target="__blank"
                href="https://theindiantableonline.com.au/order-now#indo-chinese"
                className="font-bold px-6 py-2 rounded-md border-2 text-primary border-primary  hover:bg-primary hover:text-white"
              >
                <p>Order Now</p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center my-4">
          <div className="border-2 border-primary rounded-2xl">
            <img
              style={{
                translate: "-3% -3%",
                animation: "bounce 1.5s ease-in-out infinite alternate both",
              }}
              className="h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] 2xl:h-[500px] 2xl:w-[500px] rounded-2xl"
              src={food10}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
