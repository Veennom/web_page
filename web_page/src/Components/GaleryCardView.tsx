import React, { useState } from "react";
import "./GaleryCardView.css";
interface Car {
  id: number;
  name: string;
  brand: string;
  image: any;
}

export const GaleryCardView = () => {
  const [cars] = useState<Car[]>([
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
  ]);

  const [selectedName, setSelectedName] = useState<string | null>(null);

  const handleNameClick = (name: string) => {
    setSelectedName(selectedName === name ? null : name);
  };
  const handleShowAllClick = () => {
    setSelectedName(null);
  };
  const filteredCars = selectedName
    ? cars.filter((car) => car.name === selectedName)
    : cars;

  return (
    <div className="container">
      <div className="showAll">
        <div onClick={handleShowAllClick}>Show All</div>
        {Array.from(new Set(cars.map((car) => car.name))).map((name) => (
          <div
            key={name}
            onClick={() => handleNameClick(name)}
            style={{
              fontWeight: selectedName === name ? "bold" : "normal",
            }}
          >
            {name}
          </div>
        ))}
      </div>
      <div className="showAllSecond">
        {filteredCars.map((car) => (
          <div key={car.id}>
            {/* <p>{car.name}</p> */}
            <img
              className="image"
              src={car.image}
              // style={{ maxWidth: "100%", maxHeight: "150px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
