import React, { useEffect, useRef } from 'react';
import * as fabric from 'fabric';

const ImageCanvas = ({ imageUrl, onBack }) => {
  const canvasRef = useRef(null);
  const fabricCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 500,
      height: 500,
    });
    fabricCanvasRef.current = canvas;

    const loadImage = async () => {
      try {
        const imgElement = new Image(); 
        imgElement.src = imageUrl;
         // Set the crossOrigin attribute
        imgElement.crossOrigin = 'Anonymous';

        imgElement.onload = () => {
          const img = new fabric.Image(imgElement);
          img.set({ left: 0, top: 0, selectable: false });
          img.scaleToWidth(canvas.width);
          img.scaleToHeight(canvas.height);
          canvas.add(img);
          canvas.renderAll();
        };

        imgElement.onerror = () => {
          console.error('Error loading image:', imgElement.src);
        };
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };

    loadImage();

    return () => {
      if (fabricCanvasRef.current) {
        fabricCanvasRef.current.dispose();
      }
    };
  }, [imageUrl]);

  const addText = () => {
    const canvas = fabricCanvasRef.current;
    const text = new fabric.Textbox('Your Caption Here', {
      left: 50,
      top: 50,
      fill: '#000',
      fontSize: 20,
      editable: true,
    });
    canvas.add(text);
    canvas.setActiveObject(text);
    canvas.renderAll();
  };

  const addShape = (shapeType) => {
    const canvas = fabricCanvasRef.current;
    let shape;

    switch (shapeType) {
      case 'circle':
        shape = new fabric.Circle({
          radius: 50,
          fill: 'rgba(255, 0, 0, 0.5)',
          left: 100,
          top: 100,
        });
        break;
      case 'rectangle':
        shape = new fabric.Rect({
          width: 100,
          height: 50,
          fill: 'rgba(0, 0, 255, 0.5)',
          left: 200,
          top: 150,
        });
        break;
      default:
        return;
    }

    if (shape) {
      canvas.add(shape);
      canvas.setActiveObject(shape);
      canvas.renderAll();
    }
  };

  const downloadCanvas = () => {
    const canvas = fabricCanvasRef.current;
    // Check if the canvas has any items
    if (canvas.getObjects().length === 0) {
      alert('No items on the canvas to download.');
      return;
    }

    const dataUrl = canvas.toDataURL({
      format: 'png',
      quality: 1,
    });
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'modified-image.png';
    link.click();
  };

  return (
    <div className="canvas-container">
      <button onClick={onBack}>Back to Search</button>
      <canvas ref={canvasRef} style={{ border: '1px solid #ccc' }} />
      <div className="controls">
        <button onClick={addText}>Add Text</button>
        <button onClick={() => addShape('circle')}>Add Circle</button>
        <button onClick={() => addShape('rectangle')}>Add Rectangle</button>
        <button onClick={downloadCanvas}>Download</button>
      </div>
    </div>
  );
};

export default ImageCanvas;
