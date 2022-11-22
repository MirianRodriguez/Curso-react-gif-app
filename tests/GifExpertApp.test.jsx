import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en gifExpertApp', () => {
    test('Debe tener una categoria inicial', () => {
        const {container} = render(<GifExpertApp/>);
        const cat = container.querySelectorAll('h3');
        //console.log(cat);
        expect(cat.length).toBe(1);
    })
})