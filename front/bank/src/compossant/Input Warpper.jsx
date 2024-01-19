import React, { useState } from 'react';
import '../designs/css/main.css';

function InputWrapper({ fore, titre, type, id, updateState }) {
  const [valeur, setValeur] = useState('');

  const handleChange = (e) => {
    setValeur(e.target.value);
    updateState(e.target.value); // Met à jour l'état parent
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={fore}>{titre}</label>
      <input type={type} id={id} value={valeur} onChange={handleChange} />
    </div>
  );
}

export default InputWrapper;
