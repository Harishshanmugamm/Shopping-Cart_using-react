import React from 'react';
import Card from '../Components/Card';
import NavBar from '../Components/NavBar';

const Homes = ({ state, dispatch, handleAdd }) => {
  return (
    <div>
      <NavBar />
      <Card state={state} dispatch={dispatch} handleAdd={handleAdd} />
    </div>
  );
};

export default Homes;
