import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import qualityFoodImg from "../assets/quality_food.png";
import superTasteImg from "../assets/super_taste.png";
import fastDeliveryImg from "../assets/fast_delivery.png";

import "./Features.css";

const Feature = ({ image, heading, paragraph }) => {
  return (
    <Card className="feature_card" sx={{ maxWidth: 345, margin: "20px", transition: "transform 0.3s ease-in-out", "&:hover": { transform: "scale(1.05)" } }}>
      <img src={image} alt={heading} className="feature_img" />
      <CardContent>
        <Typography variant="h5" component="div" className="features_heading">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="features_para">
          {paragraph}
        </Typography>
      </CardContent>
    </Card>
  );
};

 const Features = () => {
  const featuresData = [
    {
      image: qualityFoodImg,
      heading: "QUALITY FOOD",
      paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellendus officia qui repellat.",
    },
    {
      image: superTasteImg,
      heading: "SUPER TASTE",
      paragraph: "Lorem ipsum dolor sit amet consectetur, adipisicing sit amet elit. Sit voluptates quaerat pariatur.",
    },
    {
      image: fastDeliveryImg,
      heading: "FAST DELIVERY",
      paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellendus officia qui repellat.",
    },
  ];

  return (
    <div className="feature_main_container">
      {featuresData.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </div>
  );
};
export default Features;