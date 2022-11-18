import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //necesitamos hacer esta función porque el getGifs es una promesa, requiere un await 
    //y la función que se llame dentro del useEffect no puede ser asincrona
    const getImages = async () => {
        setImages(await getGifs(category));
        setIsLoading(false);
    }
    //useEffect recibe una función (lo que quiero que haga), y un array de dependencias (cuándo quiero que se ejecute)
    //En este caso al mandarle el array de dependencias vacío, le indica que sólo se ejecute una vez 
    //al renderizar el componente
    useEffect(() => {
        getImages();
    }, []);

    return ({
        images,
        isLoading
    })
}
