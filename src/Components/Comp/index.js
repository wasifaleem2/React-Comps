import React, { useState, useRef } from 'react';

const ImageUploadComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage({
          file,
          preview: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={uploadContainerStyle} onClick={handleDivClick}>
        {selectedImage && (
          <div style={imageWrapperStyle}>
            <img src={selectedImage.preview} alt="Uploaded" style={thumbnailStyle} />
            <p style={fileNameStyle}>{selectedImage.file.name}</p>
          </div>
        )}
        {!selectedImage && (
          <p>Click to upload an image</p>
        )}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const uploadContainerStyle = {
  border: '2px solid #cccccc',
  borderRadius: '1px',
  padding: '20px',
  cursor: 'pointer',
  height: '80px',
  width: "30%", // Adjust the height as needed
  display: 'flex',
  alignItems: 'center',
};

const imageWrapperStyle = {
  display: 'flex',
  alignItems: 'center',
};

const thumbnailStyle = {
  maxWidth: '75px',
  maxHeight: '75px',
};

const fileNameStyle = {
  marginLeft: '10px',
};

export default ImageUploadComponent;
