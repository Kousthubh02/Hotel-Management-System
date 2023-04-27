import React, { useState, useEffect } from 'react';
import './styles/StaffPortal.css';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (hasError) {
      // You can log the error to an error reporting service
      console.error('Something went wrong.');
    }
  }, [hasError]);

  if (hasError) {
    // You can render any custom fallback UI
    return <h1>Something went wrong.</h1>;
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
            status: 'Pending'
          }))
        }));
        setCheckoutData(updatedData);
      })
      .catch(error => console.error(error));
  }, []);

  const handleToggleCheckoutStatus = checkoutId => {
    const updatedData = checkoutData.map(checkout => {
      if (checkout.id === checkoutId) {
        const updatedItems = checkout.items.map(item => {
          if (item.status === 'Pending') {
            return {
              ...item,
              status: 'Done'
            };
          } else {
            return item;
          }
        });
        return {
          ...checkout,
          items: updatedItems
        };
      } else {
        return checkout;
      }
    });
    setCheckoutData(updatedData);
  
    fetch(`http://localhost:8000/checkout/${checkoutId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: updatedData.find(checkout => checkout.id === checkoutId).items }),
    })
      .then(response => response.json())
      .then(data => console.log('Checkout updated:', data))
      .catch(error => console.error(error));
  };

  return (
    <ErrorBoundary>
      <div className="staff-portal">
        <h1>Staff Portal</h1>
        {checkoutData.map(checkout => (
          <div key={checkout.id} className="checkout-section">
            <h2>Checkout {checkout.id}</h2>
            <ul className="checkout-items">
              {checkout.items.map(item => (
                <li key={item.id}>
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">${item.price}</span>
                </li>
              ))}
            </ul>
            <button
              className={`btn ${checkout.items.every(item => item.status === 'Done') ? 'done' : 'pending'}`}
              onClick={() => handleToggleCheckoutStatus(checkout.id)}
              disabled={checkout.items.every(item => item.status === 'Done')}
            >
              {checkout.items.every(item => item.status === 'Done') ? 'Done' : 'Pending'}
            </button>
          </div>
        ))}
      </div>
    </ErrorBoundary>
  );
}

export default StaffPortal;