import React from "react";
import { CardView } from "../Components/CardView";
import "./Home.css";
export const Home = () => {
  const cardData = [
    {
      title: "FERRARI",
      description: "Content for Card 1",
      image:
        "https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg",
    },
    {
      title: "LAMBORGHINI",
      description: "Content for Card 2",
      image:
        "https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg",
    },
    {
      title: "PORSCHE",
      description: "Content for Card 3",
      image:
        "https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg",
    },
    {
      title: "BUGGATI",
      description: "Content for Card 1",
      image:
        "https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg",
    },
    {
      title: "FERRARI",
      description: "Content for Card 2",
      image:
        "https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg",
    },
    {
      title: "ROLLS-ROYCE",
      description: "Content for Card 3",
      image:
        "https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg",
    },
  ];
  const handleSubmit = () => {
    console.log("hellooo");
  };
  return (
    <div className="mainContainer">
      {cardData.map((card, index) => (
        <CardView
          title={card.title}
          description={card.description}
          image={card.image}
          onClick={handleSubmit}
        />
      ))}
    </div>
  );
};
