// src/components/ModelViewer.jsx
import React from 'react';
import '@google/model-viewer';

const ModelViewer = ({ url, width = 400, height = 400 }) => {
  return (
    <model-viewer
      src={url}
      alt="3D Coffee Cup"
      auto-rotate
      camera-controls
      shadow-intensity="1"
      style={{ width, height }}
      ar
      ar-modes="webxr scene-viewer quick-look"
      autoplay
    />
  );
};

export default ModelViewer;


//