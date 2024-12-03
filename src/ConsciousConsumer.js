import React, { useState, useEffect } from 'react';

function ConsciousConsumer() {

    const [brands, setBrands] = useState([])

    const addItem = (brand) => {
        setBrands((prev) => [...prev, brand]);
    }

    return (
        <div>
            <h1>Welcome to Conscious Consumer</h1>
            <h3>Select your favorite brand:</h3>
            <button onClick={() => addItem('Reformation')}>Reformation</button>
            <button onClick={() => addItem('Ganni')}>Ganni</button>
            <button onClick={() => addItem('LOEWE')}>LOEWE</button>
            <ul>
                {brands.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ConsciousConsumer;