import React from 'react';
import './GButton.css'; // Import your CSS file for styling
import { useValue } from "../../context/ContextProvider";

const GButton = () => {
  const {
    dispatch,
  } = useValue();

  return (
    <button className="btn-signup"
    onClick={() => dispatch({ type: 'OPEN_SIGNIN' })}
    >Sign Up</button>
  );
};

export default GButton;
