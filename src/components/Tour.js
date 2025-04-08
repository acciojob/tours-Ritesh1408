import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour border rounded shadow p-4">
      <img src={image} alt={name} className="w-full h-64 object-cover rounded" />
      <div className="tour-info my-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <h3 className="tour-price text-blue-600 font-bold text-lg">${price}</h3>
      </div>
      <p className="mb-2">
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button
          onClick={() => setReadMore(!readMore)}
          className="text-blue-500 ml-2"
        >
          {readMore ? 'See less' : 'Show more'}
        </button>
      </p>
      <button
        onClick={() => removeTour(id)}
        className="delete-btn mt-2 bg-red-500 text-white px-4 py-2 rounded"
      >
        Delete Tour
      </button>
    </article>
  );
};

export default Tour;
