// A las funciones HOOK se le antepone un "use"
// El useState le indica a otros componentes de React
// que se rendericen cuando algo cambia
import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  // Con useEffect() con []: La funcion interna solo se ejecuta cuando
  // el componente es renderisado por primera ves, esta funcion esta
  // el helper => getGift, al colocar [category], tambien se ejecuta
  // cuando cambie el valor de la categoria

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);

  return state; // { data:[], loading: true };
};

// El state es la imformacion que se encuentra dentro del useState
// El setState actualiza la informacion
