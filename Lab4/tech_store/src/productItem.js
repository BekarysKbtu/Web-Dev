import React, { useState } from 'react';

const ProductItem = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const message = `Check out this product: ${product.name} - ${product.link}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(message)}`;


  const shareWhatsaap = () => {

  }

  const shareTelegram = () => {

  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.image.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.image.length) % product.image.length);
  };

  return (
    <div class="product-item">
       <img src={product.image[currentImageIndex]} alt={product.name} />
       <div>
         <button class = "img-button" onClick={handlePrevImage}>Prev</button>
         <button class = "img-button" onClick={handleNextImage}>Next</button>
       </div>
       <a target="_blank" href={product.link}><h2>{product.name}</h2></a>
       <p id="price"><b>Price: {product.price}</b></p>
       <p><b>Description: </b>{product.description}</p>
       <p>Rating: {product.rating} / 5</p>

     <div class = "share-button"> <a class = "share-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Share on WhatsApp</a></div>
     <div class = "share-button"> <a  class = "share-link" href={telegramUrl} target="_blank" rel="noopener noreferrer">Share on Telegram</a></div>
     
    </div>
  );
};

export default ProductItem;
