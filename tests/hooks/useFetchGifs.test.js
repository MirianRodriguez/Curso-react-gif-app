import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas sobre el custom hook useFetchGifs', () => {
    const category = 'spring';


    test('Debe retornar el estado inicial', () => {
        //renderHook es necesario para usar el hook porque no se pueden usar fuera de un componente funcional
        const {result} = renderHook(() => useFetchGifs(category));
        const {images, isLoading} = result.current;
        //espero que no tenga imagenes y esté cargando porque es el estado inicial
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    })

    test('Debe retornar un arreglo de imagenes y isLoading en false', async() => {
        const {result} = renderHook(() => useFetchGifs(category));
        //espero a que el arreglo de imagenes tenga al menos un elemento antes de hacer aserciones
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );
        //desestructuro
        const {images, isLoading} = result.current;
        //espero que haya imagenes y que no esté cargando
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy;
    })
})