import { useState } from "react";
import PropTypes from "prop-types";

//para poder usar onNewCategory se debe desestructurar con llaves o hacer props.onNewCategory
export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length<=1) return;
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

  return (
    <form onSubmit={onSubmit} aria-label="form">
        <input type="text" 
        placeholder="Buscar gif"
        value={inputValue}
        //llamada a la función onInputChange
        //no hace falta pasarle explicitamente el argumento event
        onChange={onInputChange}/>
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
