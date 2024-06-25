import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './AlbumPhotos.css'

const AlbumPhotos = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, [id]);

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div>
      <h1>Photos of Album {id}</h1>
      <button onClick={handleBack}>Go Back</button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {photos.map(photo => (
          <div key={photo.id} style={{ margin: '10px' }}>
            <img src={photo.thumbnailUrl} alt={photo.title} style={{ width: '150px', height: '150px' }} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumPhotos;
