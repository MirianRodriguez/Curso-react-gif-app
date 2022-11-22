import { render, screen} from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


//emula un useFetchGifs
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
    const category = 'spring';

    test('Debe mostrar "cargando" inicialmente', () => {
        

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true,
        })

        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    })

    test('Debe mostrar items cuando se cargan las imagenes desde useFetchGifs', () => {
        //supuesto arreglo de gif devuelto por el hook
        const gifs = [
            {
                id: 'img1',
                title: 'imagen1',
                url: 'https://images/image1.jpg',
            }, {
                id: 'img2',
                title: 'imagen2',
                url: 'https://images/image2.jpg',
            },{
                id: 'img3',
                title: 'imagen3',
                url: 'https://images/image3.jpg',
            }
        ]

        //simula que el hook retorna el arreglo de imagenes y el isLoading usando el mock
        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading: false,
        });

        render(<GifGrid category={category}/>);

        //screen.debug();

        expect(screen.getAllByRole('img').length).toBe(3);
    });
})