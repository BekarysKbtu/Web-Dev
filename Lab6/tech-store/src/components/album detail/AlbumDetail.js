import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './AlbumDetail.css'

const AlbumDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [album, setAlbum] = useState(null);
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then(response => response.json())
      .then(data => {
        setAlbum(data);
        setTitle(data.title);
      });
  }, [id]);

  const handleSave = () => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...album, title }),
    })
      .then(response => response.json())
      .then(data => {
        setAlbum(data);
      });
  };

  const handleBack = () => {
    navigate(-1); 
  };

  if (!album) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Album Detail</h1>
      <div>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </label>
        <button onClick={handleSave}>Save</button>
      </div>
      <button onClick={handleBack}>Go back</button>
      <a href={`/albums/${id}/photos`}>Photos</a>
    </div>
  );
};

export default AlbumDetail;
