fetch('https://infra.datos.gob.ar/georef/provincias.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error al hacer la solicitud:', error);
  });
