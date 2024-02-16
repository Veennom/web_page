import React, { useState } from 'react';
import { CardView } from '../Components/CardView';
import './Home.css';
import Modal from '../Components/Modal';
export const Home = () => {
  const cardData = [
    {
      title: 'FERRARI',
      description: 'Content for Card 1',
      image: 'https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg',
    },
    {
      title: 'LAMBORGHINI',
      description: 'Content for Card 2',
      image: 'https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg',
    },
    {
      title: 'PORSCHE',
      description: 'Content for Card 3',
      image: 'https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg',
    },
    {
      title: 'BUGGATI',
      description: 'Content for Card 1',
      image: 'https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg',
    },
    {
      title: 'FERRARI',
      description: 'Content for Card 2',
      image: 'https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg',
    },
    {
      title: 'ROLLS-ROYCE',
      description: 'Content for Card 3',
      image: 'https://rapidapi.com/blog/wp-content/uploads/2021/01/car-apis-300x200.jpg',
    },
  ];
  const handleSubmit = () => {
    console.log('hellooo');
  };
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className='mainContainer' onClick={() => setOpen(true)}>
      {cardData.map((card, index) => (
        <div>
          <CardView
            title={card.title}
            description={card.description}
            image={card.image}
            onClick={handleSubmit}
          />
          <Modal isOpen={open} closeModal={() => setOpen(false)}>
            <div onClick={() => setOpen(false)}>Close</div>
            <iframe src='https://www.google.com' title='Google'></iframe>
          </Modal>
        </div>
      ))}
    </div>
  );
};
