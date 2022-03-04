import { useState, useEffect } from 'react';
import './PlayKitForm.css';

const PlayKitForm = ({ childName, setChildName, birthDate, setBirthDate }) => {
  const handleChildName = () => {
    //
  };

  const handleBirthDate = () => {
    // 
  };

  return (
    <div className="container">
      <div className="input">
        <p>Your child's name (optional)</p>
        <input value={childName} onChange={handleChildName} />
      </div>
      <div className="input">
        <p>Birth date/due date</p>
        <input value={birthDate} onChange={handleBirthDate} />
      </div>
      <button className="green-btn">Subscribe now</button>
    </div>
  )
};

export default PlayKitForm;