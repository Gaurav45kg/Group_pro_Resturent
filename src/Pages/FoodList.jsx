import React from "react";
import Typography from "@mui/material/Typography";

import FoodCard from "../components/FoodCard";
import { FOOD_DATA } from "../components/FoodCard";
import "./FoodList.css";

const FoodList = () => {
  return (
    <div className="food_list_main_container">
      <div className="food_list_intro">
        <h1 className="food_list_heading">POPULAR DISHES</h1>
        <p className="food_list_para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, iusto
          dolorem! Voluptatibus ipsum nam mollitia architecto. Soluta pariatur
          eius et recusandae veritatis. Quasi, et molestias!
        </p>
      </div>
      <div className="food-card-container">
        {FOOD_DATA.map((food) => (
          <FoodCard
            key={food.id}
            title={food.title}
            image={food.image}
            category={food.category}
          />
        ))}
      </div>
    </div>
  );
};
export default FoodList;
