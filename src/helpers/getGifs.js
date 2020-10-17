// Funcion que regresa una Promesa que incluye la coleccion
// de imagenes "gifs" de la categoria solicitada

// encodeURI remplaza los espacios para que no de errores
export const getGifs = async (category) => {
  const apiKey = 'sGucR6IAiWVP2Mmu1CPllkKTkHZFvGt7';
  const url = `https://api.giphy.com/v1/gifs/search?q=
    ${encodeURI(category)}&limit=10&api_key=${apiKey}`;
  const resp = await fetch(url);
  // Extraer "data" dentro del array, es recibido en formato json
  const { data } = await resp.json();

  // Crear nuevos arreglos con informacion especifica: id,title y url
  // colocamos "?" en "images?" para utilizar solo si existe el url
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
