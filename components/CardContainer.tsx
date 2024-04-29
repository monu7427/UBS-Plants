import React from 'react';
import Card from './Card';

function CardContainer() {
  // Array of card data objects
  const cardData = [
    {
        title: "Tulsi Vrindavan Matt ",
        description: "6.6 inch (17 cm) Tulsi Vrindavan Matt Finish Rectangle Ceramic Pot (Light Brown)",
        imageUrl: "https://nurserylive.com/cdn/shop/products/nurserylive-planters-6-6-inch-17-cm-tulsi-vrindavan-matt-finish-rectangle-ceramic-pot-light-brown-16968519385228_383x383.jpg?v=1634209980",
        price: 169
      },   
    {
        title: "Rama Tulsi ",
        description: "0.5 kg Seeds",
        imageUrl: "https://nurserylive.com/cdn/shop/products/nurserylive-rama-tulsi-plant-holy-basil-ocimum-sanctum-green-plant_76305f7b-8b99-4e66-adbc-89844ae7a6fe_383x383.jpg?v=1634227301",
        price: 169
      },   
    {
      title: "Elephant bush, Portulacaria afra, Jade plant (Green)",
      description: "Succulent Plant",
      imageUrl: "https://nurserylive.com/cdn/shop/products/nurserylive-jade-plant-elephant-bush-green-succulent-plant-in-4-inch-10-cm-black-pot-434709_600x600.jpg?v=1684935612",
      price: 169
    },
    {
      title: "Die Hard Succulents Pack",
      description: "Top 4 .",
      imageUrl: "https://nurserylive.com/cdn/shop/products/nurserylive-g-top-4-die-hard-succulents-pack-980804_600x600.jpg?v=1679751768",
      price: 559,
      available: "Sold Out"

    },
    {
        title: "Plant Pack For Healthy Home-Office",
        description: "Pack of 5.",
        imageUrl: "https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-plants-plant-pack-for-healthy-home-office-155522_600x600.jpg?v=1679750881",
        price: 1059
      },
      {
        title: "Good Luck Jade Plants in Ceramic Pots",
        description: "Pack of 3 ",
        imageUrl: "https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-plants-pack-of-3-good-luck-jade-plants-in-ceramic-pots-16969154297996_600x600.jpg?v=1634225377",
        price: 699
      },
      {
        title: "air purifier and oxygen enriching plant pack",
        description: "Pack of 5",
        imageUrl: "https://nurserylive.com/cdn/shop/products/nurserylive-combo-packs-plants-top-5-air-purifier-and-oxygen-enriching-plant-pack-16969387507852_600x600.jpg?v=1634230232",
        price: 1299
      },
      {
        title: "Kapoor Tulsi Plant, Blue Basil, Ocimum kilimandscharicum (Green) ",
        description: "Plant",
        imageUrl: "https://nurserylive.com/cdn/shop/products/nurserylive-kapoor-tulsi-plant-blue-basil-ocimum-kilimandscharicum-green-plant_383x383.jpg?v=1634222980",
        price: 259
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
