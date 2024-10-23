import React, { useState } from 'react';
import './style.css';
import ImageSearch from './Component/ImageSearch';
import ImageCanvas from './Component/ImageCanvas';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleBack = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <h1 className="app-heading">Transform Your Images with Ease!</h1> 
      {!selectedImage ? (
        <ImageSearch onImageSelect={handleImageSelect} />
      ) : (
        <ImageCanvas imageUrl={selectedImage} onBack={handleBack} />
      )}
    </div>
  );
};

export default App;
