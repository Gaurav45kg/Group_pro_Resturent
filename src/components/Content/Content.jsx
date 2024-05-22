import React from "react";

const Content = () => {
  return (
    <div className="relative flex pb-7 mt-28  bg-gradient-to-r from-white to-pink-200">
      <div className="pl-28 flex flex-col transform translate-y-[-44px]">
        <h1 className="text-9xl bottom-0 text-center mb-22">Delicious</h1>
        <img
          className="w-72 h-75 mt-5 rounded-lg"
          src="https://mern-stack-restaurant-reservation.vercel.app/hero1.png"
          alt="Pancakes"
        />
      </div>
      <div className="pt-16">
        <div className="flex flex-row justify-between w-72">
          <h1 className="text-9xl mt-16 pt-16 pr-16  font-light">Food</h1>
          <img
            className=""
            src="https://mern-stack-restaurant-reservation.vercel.app/threelines.svg"
            alt="dots"
          />
        </div>
        <img
          className="w-24"
          src="https://mern-stack-restaurant-reservation.vercel.app/logo.svg"
          alt="Logo"
        />
      </div>
      <div className="flex flex-col transform translate-x-[190px] translate-y-[-44px]">
        <img
          className="w-72 h-full rounded-lg self-end pb-19"
          src="https://mern-stack-restaurant-reservation.vercel.app/hero2.png"
          alt="Burger"
        />
        <h1 className="text-9xl transform translate-x-[-70px]">Dishes</h1>
      </div>
    </div>
  );
};

export default Content;
