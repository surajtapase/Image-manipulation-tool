import React, { useState } from 'react';
import axios from 'axios';
import '../style.css';

const ImageSearch = ({ onImageSelect }) => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const searchImages = async () => {
    setIsLoading(true);
    setMessage(""); 

    try {
      const response = await axios.get(`https://pixabay.com/api/`, {
        params: {
          key: '46675520-68db12dd73a3b321738ddf36b',
          q: query,
          image_type: 'photo',
        },
      });
      if (response.data.hits.length === 0) {
        setMessage(`No images found for "${query}". Please try a different search.`);
      } else {
        setImages(response.data.hits);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
      setMessage("Error fetching images. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="image-search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search any images"
      />
      <button onClick={searchImages}>Search</button>

      {/* Loading and message display */}
      {isLoading && <p className="loading-message">Loading images...</p>}
      {message && <p className="error-message">{message}</p>}

      <div className="image-results">
        {images.map((img) => (
          <div key={img.id} className="image-item">
            <img 
              src={img.webformatURL} 
              alt={img.tags} 
              style={{ cursor: 'pointer' }} 
              onClick={() => onImageSelect(img.webformatURL)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSearch;
