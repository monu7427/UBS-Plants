import React from 'react';
import Card from './Card';

function CardContainer() {
  // Array of card data objects
  const cardData = [
    {
      title: "Product 1",
      description: "Description of product 1.",
      imageUrl: "https://images.pexels.com/photos/1445416/pexels-photo-1445416.jpeg",
      price: 19.99
    },
    {
      title: "Product 2",
      description: "Description of product 2.",
      imageUrl: "https://images.pexels.com/photos/834657/pexels-photo-834657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: 24.99,
      available: "Sold Out"

    },
    {
        title: "Product 3",
        description: "Description of product 2.",
        imageUrl: "https://images.pexels.com/photos/1048024/pexels-photo-1048024.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        price: 24.99
      },
      {
        title: "Product 4",
        description: "Description of product 2.",
        imageUrl: "https://images.pexels.com/photos/421999/pexels-photo-421999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 24.99
      },
      {
        title: "Product 5",
        description: "Description of product 2.",
        imageUrl: "https://images.pexels.com/photos/421999/pexels-photo-421999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 24.99
      },
      {
        title: "Product 6",
        description: "Description of product 2.",
        imageUrl: "https://images.pexels.com/photos/421999/pexels-photo-421999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        price: 24.99
      },
    // Add more card data objects as needed
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* Map over the card data array and render a Card component for each item */}
      {cardData.map((card, index) => (
        <Card 
          key={index} // Make sure to provide a unique key for each Card component
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          price={card.price}
          
        />
      ))}
    </div>
  );
}

export default CardContainer;
