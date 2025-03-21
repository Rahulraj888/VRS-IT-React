// src/components/ThumbnailList.jsx
import React from 'react';

export default function ThumbnailList({ thumbnails, onThumbnailClick }) {
  return (
    <ol className="flex-control-nav flex-control-thumbs mt-4">
      {thumbnails.map((src, index) => (
        <li key={index}>
          <img
            src={src}
            className="thumb-img"
            draggable="false"
            width="100"
            height="100"
            alt={`Thumbnail ${index + 1}`}
            onClick={() => onThumbnailClick(src)}
          />
        </li>
      ))}
    </ol>
  );
}
