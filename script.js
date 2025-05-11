const PRODUCTOS = [
  {
    id: 1,
    title: "Call Of Dutty",
    image: "./utils/call_of_dutty.png",
    description: "Juego tipo shooter +13 años",
    price: 55,
  },
  {
    id: 2,
    title: "The Little Nightmares",
    image: "./utils/thelittle_nightmares.png",
    description: "Juego tipo shooter +13 años",
    price: 55,
  },
  {
    id: 3,
    title: "The Last Of Us",
    image: "./utils/thelastofus.png",
    description: "Juego tipo shooter +13 años",
    price: 55,
  },
  {
    id: 4,
    title: "The Last Of Us",
    image: "./utils/haloreach.png",
    description: "Juego tipo shooter +13 años",
    price: 55,
  },
  {
    id: 5,
    title: "The Last Of Us",
    image: "./utils/gtav.png",
    description: "Juego tipo shooter +13 años",
    price: 55,
  },
  {
    id: 6,
    title: "The Last Of Us",
    image: "./utils/mariokart8.png",
    description: "Juego tipo shooter +13 años",
    price: 55,
  },
  {
    id: 7,
    title: "Hora de Aventuras: Finn y Jake",
    image: "./utils/horaaventura.png",
    description: "Juego tipo shooter +13 años",
    price: 55,
  },
  {
    id: 8,
    title: "Burnout",
    image: "./utils/burnout1.png",
    description: "Juego tipo shooter +13 años",
    price: 55,
  },
  {
    id: 9,
    title: "Burnout",
    image: "./utils/needforspeed.png",
    description: "Juego tipo shooter +13 años",
    price: 55,
  },
  {
    id: 10,
    title: "Burnout",
    image: "./utils/forza.png",
    description: "Juego tipo shooter +13 años",
    price: 55,
  },
];

const crearCards = () => {
  cajaGaleria = document.getElementById("caja_galeria");
  PRODUCTOS.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = ` 
        <div id="card">

          <img src=${producto.image} alt=${producto.image} id="card_image" />
          <h3>${producto.title}</h3>
          <p>${producto.description}</p>
          <button id="boton_card">Añadir al carrito</button>
        </div>
      `;
    cajaGaleria.appendChild(card);
  });
};


document.addEventListener("DOMContentLoaded", () => {
  crearCards();
});
