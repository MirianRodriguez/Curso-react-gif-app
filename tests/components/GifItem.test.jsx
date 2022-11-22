import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas sobre el GifItem', () => {

    const title = 'un titulo';
    const url = 'https://una-url.jpg/';

    test('Debe coincidir con el snapshot', () => {
        const {container} = render(<GifItem title={title} url={url}/>);
        expect({container}).toMatchSnapshot();
    })

    test('Debe mostrar la img con src igual a la url enviada y alt igual al titulo', () => {
        render(<GifItem title={title} url={url}/>);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('Debe mostrarse el título enviado', () => {
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
})