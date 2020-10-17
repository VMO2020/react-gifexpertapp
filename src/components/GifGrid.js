import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  // Utilizar la funcion hook: useFetchGifs, destructurando
  // la informacion recibida y cambiando nombre de data a images
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className='animate__animated animate__bounce'>{category}</h3>
      {loading && <p>Loading...</p>}
      <div className='card-grid'>
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

// {...img} mandamos cada una de las propiedades, como una
// propiedad independiente {id, title, url}
