const lista = (id) => {
    return [
      {
        id: 1,
        nombre: "Vestido",
        precio: 750,
        stock: 50,
        contador: 0,
        descripcion: "Vestido de fibrana lisa",
        url: "https://i.ibb.co/0BsJFb6/vestido.jpg"
      },
      {
        id: 2,
        nombre: "Blusa",
        precio: 500,
        stock: 50,
        contador: 0,
        descripcion: "Blusa de fibrana lisa con boton atras",
        url: "https://i.ibb.co/RpkrNT2/blusa.jpg"
      },
      {
        id: 3,
        nombre: "Remera",
        precio: 450,
        stock: 50,
        contador: 0,
        descripcion: "Remera de morley viscosa con tajo en la espalda",
        url: "https://i.ibb.co/GsVzSZS/remera.jpg"
      },
      {
        id: 4,
        nombre: "Calza",
        precio: 600,
        stock: 50,
        contador: 0,
        descripcion: "Calza de bengalina lisa con corte jean",
        url: "https://i.ibb.co/F6mxBZV/calza.jpg"
      },
      {
        id: 5,
        nombre: "Babucha",
        precio: 650,
        stock: 50,
        contador: 0,
        descripcion: "Babucha de morley viscosa",
        url: "https://i.ibb.co/DMCgh2n/babucha.jpg"
      }
    ];
  };
  
  const listaProducto = new Promise((rej, res) => {
    setTimeout(() => {
      rej(lista("1"));
    }, 2000);
  });
  
  export default listaProducto;