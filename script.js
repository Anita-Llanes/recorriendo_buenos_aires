const productos = [
    {
        nombre: "Históricos",
        imagen: "https://i.postimg.cc/MppL9zrT/cabildo.jpg",
        descripción: "Explora los sitios históricos que narran la rica historia de Buenos Aires.",
        precio:55000
    },
    {
        nombre: "Artístico",
        imagen: "https://i.postimg.cc/vBDhnvXH/teatro-colon-fachada-noche-gente.jpg",
        descripción: "Sumérgete en el arte local a través de museos, galerías y exposiciones.",
        precio:75000
    },
    {
        nombre: "Icónicos",
        imagen: "https://i.postimg.cc/KYdscBck/la-boca-esquina-fachada.jpg",
        descripción: "Visita los lugares emblemáticos que definen la ciudad.",
        precio:85000
    },
    {
        nombre: "Recreativo",
        imagen: "https://i.postimg.cc/g0sR0PHC/reserva-ecologica.jpg",
        descripción: "Descubre los parques y espacios verdes ideales para disfrutar al aire libre.",
        precio:90000
    },
    {
        nombre: "Deportivo",
        imagen: "https://i.postimg.cc/2ScrjcBH/estadio.jpg",
        descripción: "Conoce los lugares para practicar deportes y actividades físicas en la ciudad.",
        precio:95000
    },
    {
        nombre: "Nocturno",
        imagen: "https://i.postimg.cc/C5jypJjx/puente-de-la-mujer.jpg",
        descripción: "Descubre la vida nocturna de Buenos Aires, con sus bares, clubes y espectáculos.",
        precio:95000
    },
];

const listCarrito = document.querySelector("#carrito ul");
const totalCarrito = document.querySelector("#carrito p");
const mensajePagarCarrito = document.getElementById("mensajeCarrito");

let totalPagar = 0;

const btnAgregar = document.querySelectorAll(".cart-link");  // Cambié el selector a .cart-link

// Agregar elementos al carrito
btnAgregar.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();  // Evitar que el enlace realice la acción por defecto
        
        const producto = productos[index];  // Obtiene el producto correspondiente
        
        const elementoLi = document.createElement("li");
        elementoLi.innerText = `${producto.nombre} - $${producto.precio}`;
        listCarrito.appendChild(elementoLi);
        
        totalPagar += producto.precio;
        totalCarrito.innerText = `Total a pagar: $${totalPagar}`;
    });
});

// Agregar funcionalidad para borrar carrito
const botonBorrar = document.querySelector("#btn_borrar");
botonBorrar.addEventListener("click", () => {
    listCarrito.innerHTML = "";  // Limpiar el carrito
    totalCarrito.innerText = "Total a pagar: $0";  // Restablecer el total
    totalPagar = 0;
    mensajePagarCarrito.innerText = "";  // Limpiar el mensaje de pago
});
