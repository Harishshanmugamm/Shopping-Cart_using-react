import React from 'react'
import "./CartCard.css"

const CartCard = ({ cartItems, dispatch }) => {
    return (
        <div>
            {cartItems.length === 0 ? (
                <p className='empty' style={{ textAlign: "center", fontSize: "2rem" }}>Your cart is empty.</p>
            ) : (
                <div className='card-container'>
                    {cartItems.map((item) => (
                        <div className="card" key={item.id}>
                            <img src={item.image} alt={item.name} className="p-image" width="200px" />
                            <h2>{item.name}</h2>
                            <p>Price: ${item.price}</p>
                            <p className='description'>{item.description}</p>
                            <p className='q-d'>Quantity: {item.quantity}</p>
                            <button onClick={() => dispatch({ type: "DELETE", payload: item.id })}>
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}</div>
    )
}

export default CartCard