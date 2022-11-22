import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('Pruebas en AddCategory', () => {
    test('debe cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={()=>{}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'pepe'}});
        expect(input.value).toBe('pepe');
    })

    test('debe llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'pepe';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        //simula la escritura en el input
        fireEvent.input(input, {target: {value:inputValue}});
        //simula el envío del form
        fireEvent.submit(form);
        //espera que después del envío el input se limpie
        expect(input.value).toBe('');
        //espera que onNewCategory haya sido llamada
        expect(onNewCategory).toBeCalled();
        //espera que onNewCategory haya sido llamada una vez
        expect(onNewCategory).toBeCalledTimes(1);
        //espera que onNewCategory haya sido llamada con el inputValue
        expect(onNewCategory).toBeCalledWith(inputValue);
    })

    test('No debe llamar onNewCategory si el input está vacío', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).not.toHaveBeenCalled();
    })
})