// App.js

import "./App.css";
import { useReducer } from "react";
import { datas } from "./attributes/Sources";
import Homes from "./Pages/Homes";
import Cart from "./Pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function reducerfn(state, action) {
  console.log(action.type);
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case "DELETE":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
}

function App() {

  const InitialValue = {
    items: [...datas],
    cart: [],
  };

  const [state, dispatch] = useReducer(reducerfn, InitialValue);

  const handleAdd = (item) => {
    const existingItem = state.cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: item.id, quantity: existingItem.quantity + 1 },
      });
    } else {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...item, quantity: 1 },
      });
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Homes state={state} dispatch={dispatch} handleAdd={handleAdd} />}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={state.cart} dispatch={dispatch} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
