import React from 'react';

function Purchase({ book }) {
    const handlePurchase = () => {
        // Logic for handling purchase
        alert(`Thank you for purchasing ${book.title}`);
    };

    return (
        <div>
            <h2>Purchase {book.title}</h2>
            <p>Price: {book.price} THB</p>
            <button onClick={handlePurchase}>Confirm Purchase</button>
        </div>
    );
}

export default Purchase;
