import React from 'react';
import NavBar from '../Components/NavBar';
import CartCard from '../Components/CartCard';

const Cart = ({ cartItems, dispatch }) => {
    return (
        <div>
            <NavBar />
            <CartCard cartItems={cartItems} dispatch={dispatch} />
        </div>
    );
};

export default Cart;
