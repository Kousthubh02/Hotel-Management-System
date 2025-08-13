import React from 'react';
import { Link } from 'react-router-dom';

function Rating() {
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
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">How did we do?</h1>
        <p className="text-gray-600 mb-6">
          Please let us know how we did with your support request. All feedback is appreciated 
          to help us improve our offering!
        </p>

        <ul className="flex justify-between gap-3 mb-6">
          {[1, 2, 3, 4, 5].map((rating) => (
            <li key={rating}>
              <button
                className="w-12 h-12 rounded-full bg-gray-200 hover:bg-blue-500 hover:text-white text-gray-800 font-medium transition"
              >
                {rating}
              </button>
            </li>
          ))}
        </ul>

        <Link
          to="/Thankyou"
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition text-center"
        >
          Submit
        </Link>
      </div>
    </div>
  );
}

export default Rating;
