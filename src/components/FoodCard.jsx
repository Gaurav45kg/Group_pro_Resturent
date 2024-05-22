import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';





export const FOOD_DATA=[
    {
        "id": 1,
        "image":"../../public/Food_Items_images/dinner1.jpeg",
        "title": "ROASTED LAMB RUMP",
        "category": "Dinner"
    },
    {
        "id": 2,
        "image": "../../public/Food_Items_images/dinner2.png",
        "title": "CITRUS CURED SALMON",
        "category": "Dinner"
    },
    {
        "id": 3,
        "image": "../../public/Food_Items_images/breakfast1.png",
        "title": "PAN SEARED SEA BASS",
        "category": "Breakfast"
    },
    {
        "id": 4,
        "image": "../../public/Food_Items_images/dinner3.png",
        "title": "STUFFED STRAWBERRY",
        "category": "Dinner"
    },
    {
        "id": 5,
        "image": "../../public/Food_Items_images/lunch1.png",
        "title": "BEEF BURGER MEAL",
        "category": "Lunch"
    },
    {
        "id": 6,
        "image": "../../public/Food_Items_images/dinner4.png",
        "title": "MUSSELS SOUP",
        "category": "Dinner"
    },
    {
        "id": 7,
        "image": "../../public/Food_Items_images/dinner5.png",
        "title": "ITALIAN SPAGHETTI",
        "category": "Dinner"
    },
    {
        "id": 8,
        "image": "../../public/Food_Items_images/dinner6.png",
        "title": "GRILLED FISH",
        "category": "Dinner"
    }];

const FoodCard = ({ title, image, category }) => {
function Handlingclik(event){
  console.log("clicked");
}




  return (
    <Card sx={{ maxWidth: 345, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", borderRadius: "15px", transition: "transform 0.3s ease-in-out", "&:hover": { transform: "scale(1.05)" } }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default FoodCard;
