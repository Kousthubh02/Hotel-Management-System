import React, { useEffect } from 'react';

function Thankyou() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.replace('http://localhost:3000/');
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="flex items-center justify-center min-h-screen px-4"
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundImage:
          'linear-gradient(to bottom right, #A1C298, #C6EBC5, #FBF2CF, #F9F5E7)',
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
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Thank You!</h1>
        <p className="mb-2 text-gray-700">Hope you enjoyed your meal</p>
        <p className="mb-2 text-gray-700">
          If you have any questions or concerns, please don't hesitate to contact us.
        </p>
        <p className="text-gray-700">
          Best regards,
          <br />
          The 56-East Team
        </p>
      </div>
    </div>
  );
}

export default Thankyou;
