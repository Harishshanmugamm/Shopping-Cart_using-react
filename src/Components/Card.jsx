import React from 'react';
import "./Card.css";


const Card = ({ state, handleAdd }) => {
    return (
        <div className='card-container'>
            {state.items.map((item) => (
                <div key={item.id} className="card">
                    <img src={item.image} alt="ProductImages" className="p-image" width="200px"></img>
                    <h2>{item.name}</h2>
                    <p>Price: ${item.price}</p>
                    <p className='description'>{item.description}</p>
                    <button onClick={() => handleAdd(item)}>Add To Cart</button>
                </div>
            ))}
        </div>
    );
};

export default Card;
