import { useState } from "react"

//para poder usar onAddCategory se debe desestructurar con llaves o hacer props.onAddCategory
export const AddCategory = ({onAddCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length<=1) return;
        onAddCategory(inputValue.trim());
        setInputValue('');
    }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" 
        placeholder="Buscar gif"
        value={inputValue}
        //llamada a la función onInputChange
        //no hace falta pasarle explicitamente el argumento event
        onChange={onInputChange}/>
    </form>
  )
}
