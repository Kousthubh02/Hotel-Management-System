import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Rating() {
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundImage:
          "linear-gradient(to bottom right, #A1C298, #C6EBC5, #FBF2CF, #F9F5E7)",
      }}
    >
      <div
        className="
          font-sans
          text-center
          p-12
          border border-white/20
          rounded-[50px]
          bg-white/30
          shadow-[0_4px_30px_rgba(0,0,0,0.1)]
          mx-auto
          w-full max-w-md
        "
      >
        <h1 className="text-4xl mb-8 text-gray-800 font-bold">How did we do?</h1>
        <p className="text-gray-600 mb-6">
          Please let us know how we did with your support request. All feedback is appreciated 
          to help us improve our offering!
        </p>

        <ul className="flex justify-between gap-3 mb-6">
          {[1, 2, 3, 4, 5].map((rating) => (
            <li key={rating}>
              <button
                onClick={() => handleRatingClick(rating)}
                className={`w-12 h-12 rounded-full font-medium transition ${
                  selectedRating === rating
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'
                }`}
              >
                {rating}
              </button>
            </li>
          ))}
        </ul>

        <Link
          to="/Thankyou"
          className={`block w-full ${
            selectedRating ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
          } text-white font-semibold py-2 rounded-lg transition text-center`}
          onClick={(e) => {
            if (!selectedRating) e.preventDefault(); // prevent navigation if no rating selected
          }}
        >
          Submit
        </Link>
      </div>
    </div>
  );
}

export default Rating;
