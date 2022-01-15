const productos = [
  { id: 1, nombre: "Escuadra", precio: 323.45 },
  { id: 2, nombre: "Calculadora", precio: 234.56 },
  { id: 3, nombre: "Globo Terráqueo", precio: 45.67 },
  { id: 4, nombre: "Paleta Pintura", precio: 456.78 },
  { id: 5, nombre: "Reloj", precio: 67.89 },
  { id: 6, nombre: "Agenda", precio: 78.9 },
];

const prices = [];

const data = {
  totalPrice: 0,
  medianPrice: 0,
  cheapestProduct: null,
  mostExpensiveProduct: null,
  products: "",
};

(async () => {
  await productos.forEach((product) => {
    prices.push(product.precio);
    data.totalPrice += product.precio;
    if (
      data.cheapestProduct === null ||
      data.cheapestProduct.precio > product.precio
    ) {
      data.cheapestProduct = product;
    }
    if (
      data.mostExpensiveProduct === null ||
      data.mostExpensiveProduct.precio < product.precio
    ) {
      data.mostExpensiveProduct = product;
    }
    data.products += product.nombre + ",";
  });
  
  data.totalPrice = data.totalPrice.toFixed(2);
  data.medianPrice = (data.totalPrice / prices.length).toFixed(2);
  console.log(data);
})();
