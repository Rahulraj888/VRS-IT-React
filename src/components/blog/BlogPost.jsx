import React, { useState } from 'react';

export default function BlogPost({ id, title, meta, image, snippet, fullContent }) {
  const [showFull, setShowFull] = useState(false);

  return (
    <article id={id} className="blog-post">
      <h2>{title}</h2>
      <div className="meta">{meta}</div>
      <img src={image} alt={title} className="blog-image" />
      <p>{snippet}</p>
      {showFull && <div className="full-content">{fullContent}</div>}
      <button className="cta-button" onClick={() => setShowFull(!showFull)}>
        {showFull ? 'Read Less' : 'Read More'}
      </button>
    </article>
  );
}
