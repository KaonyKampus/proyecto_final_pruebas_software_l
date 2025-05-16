const PRODUCTOS = [
  {
    id: 1,
    title: "Call Of Duty",
    image: "./utils/call_of_dutty.png",
    description: "Juego de guerra con misiones tácticas. Recomendado para mayores de 13 años.",
    price: 60000,
    category: "Shooter",
  },
  {
    id: 2,
    title: "The Little Nightmares",
    image: "./utils/thelittle_nightmares.png",
    description: "Juego de suspenso y plataformas con estilo oscuro.",
    price: 50000,
    category: "Shooter",
  },
  {
    id: 3,
    title: "The Last Of Us",
    image: "./utils/thelastofus.png",
    description: "Supervivencia post-apocalíptica con narrativa intensa.",
    price: 65000,
    category: "Shooter",
  },
  {
    id: 4,
    title: "Halo Reach",
    image: "./utils/haloreach.png",
    description: "Acción futurista con combates espaciales y alienígenas.",
    price: 58000,
    category: "Shooter",
  },
  {
    id: 5,
    title: "GTA V",
    image: "./utils/gtav.png",
    description: "Mundo abierto con múltiples personajes y misiones caóticas.",
    price: 70000,
    category: "Shooter",
  },
  {
    id: 6,
    title: "Mario Kart 8",
    image: "./utils/mariokart8.png",
    description: "Carreras con personajes de Nintendo y objetos divertidos.",
    price: 45000,
    category: "Carreras",
  },
  {
    id: 7,
    title: "Hora de Aventuras: Finn y Jake",
    image: "./utils/horaaventura.png",
    description: "Juego de plataformas basado en la serie animada. Perfecto para niños.",
    price: 35000,
    category: "Infantil",
  },
  {
    id: 8,
    title: "Burnout 3: Takedown",
    image: "./utils/burnout1.png",
    description: "Carreras explosivas con choques espectaculares.",
    price: 48000,
    category: "Carreras",
  },
  {
    id: 9,
    title: "Need For Speed: Heat",
    image: "./utils/needforspeed.png",
    description: "Carreras urbanas nocturnas con persecuciones policiales.",
    price: 55000,
    category: "Carreras",
  },
  {
    id: 10,
    title: "Forza Horizon 5",
    image: "./utils/forza.png",
    description: "Simulador de conducción con entornos realistas.",
    price: 70000,
    category: "Carreras",
  },
  {
    id: 11,
    title: "Paw Patrol: Mighty Pups",
    image: "./utils/pawpatrol.png",
    description: "Juego para niños con aventuras y misiones de rescate.",
    price: 30000,
    category: "Infantil",
  },
  {
    id: 12,
    title: "Lego Marvel Super Heroes",
    image: "./utils/lego_marvel.png",
    description: "Juego de acción y rompecabezas para todas las edades.",
    price: 40000,
    category: "Infantil",
  },
  {
    id: 13,
    title: "Peppa Pig: World Adventures",
    image: "./utils/peppapig.png",
    description: "Juego educativo para niños pequeños con Peppa Pig.",
    price: 28000,
    category: "Infantil",
  },
  {
    id: 14,
    title: "Hot Wheels Unleashed",
    image: "./utils/hotwheels.png",
    description: "Carreras con coches miniatura en pistas espectaculares.",
    price: 42000,
    category: "Carreras",
  },
  {
    id: 15,
    title: "F1 2023",
    image: "./utils/f1_2023.png",
    description: "Simulación realista de la Fórmula 1 con todos los equipos oficiales.",
    price: 65000,
    category: "Carreras",
  },
  {
    id: 16,
    title: "Overwatch 2",
    image: "./utils/overwatch2.png",
    description: "Shooter por equipos con personajes únicos y habilidades especiales.",
    price: 50000,
    category: "Shooter",
  },
  {
    id: 17,
    title: "Valorant",
    image: "./utils/valorant.png",
    description: "Shooter táctico multijugador con poderes especiales.",
    price: 50000,
    category: "Shooter",
  },
  {
    id: 18,
    title: "Splatoon 3",
    image: "./utils/splatoon3.png",
    description: "Shooter colorido y amigable para jugadores jóvenes.",
    price: 55000,
    category: "Shooter",
  },
  {
    id: 19,
    title: "Crash Team Racing",
    image: "./utils/crashteamracing.png",
    description: "Carreras alocadas con personajes de Crash Bandicoot.",
    price: 38000,
    category: "Carreras",
  },
  {
    id: 20,
    title: "Super Mario Odyssey",
    image: "./utils/mario_odyssey.png",
    description: "Plataformas creativas en mundos variados para todas las edades.",
    price: 60000,
    category: "Infantil",
  },
];

let productosFiltrados = [...PRODUCTOS];

// Función para crear tarjetas de productos
const crearCards = () => {
  const cajaGaleria = document.getElementById("caja_galeria");
  cajaGaleria.innerHTML = '';

  productosFiltrados.forEach((producto) => {
    const card = document.createElement("div");
    const clasesCard = "max-w-xs bg-gray-900 rounded-xl shadow-lg border border-gray-700 flex flex-col items-center overflow-hidden hover:scale-105 transform transition-transform duration-300";
    card.className = clasesCard;
    card.innerHTML = `
      <img src="${producto.image}" alt="${producto.title}" class="w-full h-48 object-cover rounded-t-xl" />
      
      <div class="p-4 w-full text-center">
        <h3 class="text-green-400 text-xl font-semibold mb-2">${producto.title}</h3>
        <p class="text-gray-300 text-sm mb-4">${producto.description}</p>
        <p class="text-green-400 font-bold mb-4">$ ${producto.price.toLocaleString()} COP</p>

        <button class="bg-green-400 hover:bg-green-500 text-black font-semibold py-2 px-4 rounded-lg w-full transition duration-300 add-to-cart-btn" data-id="${producto.id}">
          <span class="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h13l2-9"/>
            </svg>
            Añadir al carrito
          </span>
        </button>
      </div>
    `;

    cajaGaleria.appendChild(card);
  });

  // Configurar los botones de añadir al carrito
  configurarBotonesAddToCart();
};

// Función para manejar la adición al carrito
const configurarBotonesAddToCart = () => {
  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
      const idProducto = parseInt(button.dataset.id);
      const producto = PRODUCTOS.find(p => p.id === idProducto);
      
      if (producto && typeof window.addToCart === 'function') {
        window.addToCart(producto);
      }
    });
  });
};

// Filtrar productos por categoría
const filtrarProductos = (categoria) => {
  if (categoria === 'all') {
    productosFiltrados = [...PRODUCTOS];
  } else {
    productosFiltrados = PRODUCTOS.filter(producto => producto.category === categoria);
  }
  
  crearCards();
  
  // Notificar al cart.js que se actualizaron los productos
  if (typeof window.updateCartEventListeners === 'function') {
    window.updateCartEventListeners();
  }
};

// Configurar los enlaces de navegación
const configurarNavegacion = () => {
  document.querySelectorAll('nav a[data-category]').forEach(enlace => {
    enlace.addEventListener('click', (e) => {
      e.preventDefault();
      const categoria = enlace.dataset.category;
      filtrarProductos(categoria);
      
      // Actualizar clase activa en la navegación
      document.querySelectorAll('nav a[data-category]').forEach(a => {
        a.classList.remove('text-green-400');
        a.classList.add('text-gray-300');
      });
      
      enlace.classList.remove('text-gray-300');
      enlace.classList.add('text-green-400');
    });
  });
};

// Configurar búsqueda
const configurarBusqueda = () => {
  // Crear elemento de búsqueda si no existe
  if (!document.getElementById('search-box')) {
    const nav = document.querySelector('nav ul');
    const searchLi = document.createElement('li');
    searchLi.innerHTML = `
      <div class="relative">
        <input id="search-box" type="text" placeholder="Buscar juegos..." 
               class="bg-gray-800 text-white px-3 py-1 rounded-lg border border-gray-700 focus:outline-none focus:border-green-400">
      </div>
    `;
    nav.insertBefore(searchLi, nav.firstChild);
    
    // Añadir funcionalidad de búsqueda
    document.getElementById('search-box').addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase().trim();
      
      if (searchTerm === '') {
        productosFiltrados = [...PRODUCTOS];
      } else {
        productosFiltrados = PRODUCTOS.filter(producto => 
          producto.title.toLowerCase().includes(searchTerm) || 
          producto.description.toLowerCase().includes(searchTerm)
        );
      }
      
      crearCards();
    });
  }
};

// Exponer funciones para que cart.js pueda acceder a ellas
window.addToCart = (producto) => {
  // Esta función será sobreescrita por cart.js
  console.log('Función addToCart no implementada aún');
};

window.updateCartEventListeners = () => {
  // Esta función será sobreescrita por cart.js
  console.log('Función updateCartEventListeners no implementada aún');
};

// Inicializar al cargar el documento
document.addEventListener("DOMContentLoaded", () => {
  crearCards();
  configurarNavegacion();
  configurarBusqueda();
});