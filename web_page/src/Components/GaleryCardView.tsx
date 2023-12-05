import React, { useState } from "react";
import "./GaleryCardView.css";
interface Car {
  id: number;
  name: string;
  brand: string;
  image: any;
}

export const GaleryCardView = () => {
  const cars = [
    {
      id: 1,
      name: "Audi",
      brand: "Brand A",
      image:
        "https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg",
    },
    {
      id: 2,
      name: "Bentley",
      brand: "Brand B",
      image:
        "https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg",
    },
    {
      id: 3,
      name: "Brabus",
      brand: "Brand A",
      image:
        "https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg",
    },
    {
      id: 4,
      name: "Ferrari",
      brand: "Brand C",
      image:
        "https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg",
    },
    {
      id: 5,
      name: "Lamborghini",
      brand: "Brand B",
      image:
        "https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg",
    },
    {
      id: 6,
      name: "Mclaren",
      brand: "Brand C",
      image:
        "https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg",
    },
    {
      id: 7,
      name: "Mercedes",
      brand: "Brand A",
      image:
        "https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg",
    },
    {
      id: 8,
      name: "Porsche",
      brand: "Brand B",
      image:
        "https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg",
    },
    {
      id: 9,
      name: "Rangerover",
      brand: "Brand B",
      image:
        "https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg",
    },
    {
      id: 10,
      name: "Bmw",
      brand: "Brand B",
      image:
        "https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg",
    },
    {
      id: 11,
      name: "Rangerover",
      brand: "Brand B",
      image:
        "https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg",
    },
    {
      id: 12,
      name: "Golf",
      brand: "Brand B",
      image:
        "https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg",
    },
    {
      id: 13,
      name: "Mercedes",
      brand: "Brand B",
      image:
        "https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg",
    },
    {
      id: 14,
      name: "Lamborghini",
      brand: "Brand B",
      image:
        "https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg",
    },
    {
      id: 15,
      name: "Mercedes",
      brand: "Brand B",
      image:
        "https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg",
    },
    {
      id: 16,
      name: "Lamborghini",
      brand: "Brand B",
      image:
        "https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg",
    },
    {
      id: 17,
      name: "Mercedes",
      brand: "Brand B",
      image:
        "https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg",
    },
  ];
  const header = [
    "Lamborghini",
    "Audi",
    "Mercedes",
    "Rangerover",
    "Beantly",
    "Bmw",
  ];
  console.log("header", header);
  const [selectedName, setSelectedName] = useState<string>("");

  const filteredCars = selectedName
    ? cars.filter((car) => car.name === selectedName)
    : cars;

  return (
    <div className="container">
      <div className="showAll">
        <div className="showAll" onClick={() => setSelectedName("")}>
          Show All
        </div>

        {header.map((car) => (
          <div
            className="filterCar"
            key={car}
            onClick={() => setSelectedName(car)}
            style={{
              fontWeight: selectedName === car ? "bold" : "normal",
              textDecoration: selectedName === car ? "underline" : "none",
            }}
          >
            {car}
          </div>
        ))}
      </div>
      <div className="showAllSecond">
        {filteredCars.map((car) => (
          <div key={car.id}>
            <img className="image" src={car.image} />
          </div>
        ))}
      </div>
    </div>
  );
};
