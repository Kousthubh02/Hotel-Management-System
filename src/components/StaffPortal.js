import React, { useState, useEffect } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (hasError) {
      console.error('Something went wrong.');
    }
  }, [hasError]);

  if (hasError) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-red-100">
        <h1 className="text-2xl font-bold text-red-700">Something went wrong.</h1>
      </div>
    );
  }

  return children;
}

function StaffPortal() {
  const [checkoutData, setCheckoutData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/checkout/')
      .then(response => response.json())
      .then(data => {
        const updatedData = data.map(checkout => ({
          ...checkout,
          items: checkout.items.map(item => ({
            ...item,
            status: 'Pending',
          })),
        }));
        setCheckoutData(updatedData);
      })
      .catch(error => console.error(error));
  }, []);

  const handleToggleCheckoutStatus = checkoutId => {
    const updatedData = checkoutData.map(checkout => {
      if (checkout.id === checkoutId) {
        const updatedItems = checkout.items.map(item =>
          item.status === 'Pending'
            ? { ...item, status: 'Done' }
            : item
        );
        return { ...checkout, items: updatedItems };
      }
      return checkout;
    });

    setCheckoutData(updatedData);

    fetch(`http://localhost:8000/checkout/${checkoutId}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: updatedData.find(c => c.id === checkoutId).items,
      }),
    })
      .then(response => response.json())
      .then(data => console.log('Checkout updated:', data))
      .catch(error => console.error(error));
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-green-200 via-yellow-100 to-amber-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">Staff Portal</h1>

          {checkoutData.map(checkout => (
            <div
              key={checkout.id}
              className="bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-300"
            >
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Checkout #{checkout.id}</h2>

              <ul className="space-y-2 mb-4">
                {checkout.items.map(item => (
                  <li
                    key={item.id}
                    className="flex justify-between bg-gray-50 px-4 py-2 rounded border border-gray-200"
                  >
                    <span className="text-gray-800 font-medium">{item.name}</span>
                    <span className="text-gray-600">${item.price}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2 rounded text-white font-semibold transition duration-200 ${
                  checkout.items.every(item => item.status === 'Done')
                    ? 'bg-green-600 cursor-not-allowed'
                    : 'bg-yellow-500 hover:bg-yellow-600'
                }`}
                onClick={() => handleToggleCheckoutStatus(checkout.id)}
                disabled={checkout.items.every(item => item.status === 'Done')}
              >
                {checkout.items.every(item => item.status === 'Done') ? 'Done' : 'Mark as Done'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default StaffPortal;
