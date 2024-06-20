import React, { useState } from 'react';
import './ProductItem.css'

const ProductItem = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [likes, setLikes] = useState(0);
  const message = `Check out this product: ${product.name} - ${product.link}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
  const telegramUrl = `https://t.me/share/url?url=%24&text=${encodeURIComponent(message)}`;

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.image.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.image.length) % product.image.length);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="product-item">
       <img src={product.image[currentImageIndex]} alt={product.name} />
       <div>
           <button className = "img-button" onClick={prevImage}>Prev</button>
           <button className = "img-button" onClick={nextImage}>Next</button>
       </div>
       <a target = '_blank' href = {product.link}><h2>{product.name}</h2></a>
       <p><b>{product.price}</b></p>
       <button onClick={handleLike} className="like-button">
          👍 Like {likes}
       </button>
       <p>{product.description}</p>
       <p>Rating: {product.rating} / 5</p>
        <div className = "share-button"> 
           <a className = "share-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Share on WhatsApp</a>
        </div>

        <div className = "share-button">
           <a  className = "share-link" href={telegramUrl} target="_blank" rel="noopener noreferrer">Share on Telegram</a>
         </div>
    </div>
  );
};

export default ProductItem;
