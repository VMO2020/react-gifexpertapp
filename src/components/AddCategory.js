import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState('');

  // Mantener el inputValue actualizado con el input
  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Confirmar que se ingreso al menos dos letras (.trim borra espacios)
    // y agregar nuevo elemento con la funcion heredada "setCategories"
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      // Limpiar el input al hacer submit (Enter)
      setinputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

// Funcion para enviar un warning si no se envia la funcion "PropTypes"
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
