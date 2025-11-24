import imgNote from "../assets/img-projects/note-app.png";
import urbanStyle from "../assets/img-projects/urbanStyle.png";
import legalWeb from "../assets/img-projects/legalweb.webp";
import mediCare from "../assets/img-projects/medicare.jpg";
import astroFit from "../assets/img-projects/Astrofit.jpg";
import Verbenas from "../assets/img-projects/challenge-newyze.png";

export const proyectos = [
  {
    titulo: "Página Web Citarella",
    descripcion:
      "App full-stack con funciones CRUD, creacion de tableros y listas, autentificacion de usuarios, desarrollada con MERN stack.",
    imagen: imgNote.src,
    tecnologias: ["React", "Tailwind", "Express", "MongoDB"],
    demo: "https://drcitarella.com",
    categoria: "Desarrollo Web",
  },
  {
    titulo: "Contenidos Infinity Farms",
    descripcion:
      "E-commerce funcional de ropa y accesorios, con carrito de compras categorias y pasarela de pago desarrollado en React.",
    imagen: urbanStyle.src,
    tecnologias: ["React", "Tailwind", "Firebase"],
    demo: "https://www.instagram.com/infinityfarmscol",
    categoria: "Contenidos",
  },
  {
    titulo: "Página Web La Kasa X la Ventana",
    descripcion:
      "Ecommerce Full-Stack para ver, comprar y vender tus productos, con login para usuarios y vendedores.",
    imagen:
      "https://i.pinimg.com/736x/c9/70/bf/c970bfbc24489e39418b2c1b1f8f74ef.jpg",
    tecnologias: ["React", "Node", "Express", "MongoDB"],
    demo: "https://lakasacrea.com/lakasaxlaventana",
    categoria: "Desarrollo Web",
  },
  {
    titulo: "Página Web J&M Creciendo Contigo",
    descripcion:
      "App que realiza operaciones CRUD para agregar, ver, editar y eliminar ingresos/gastos.",
    imagen:
      "https://jmcreciendocontigo.com",
    tecnologias: ["React", "contextAPI"],
    demo: "https://jmcreciendocontigo.com",
    categoria: "Desarrllo Web",
  },
  {
    titulo: "Contenidos Kassa",
    descripcion:
      "Aplicación hecha con React que utiliza una API para mostrar el clima en tiempo real.",
    imagen:
      "https://i.pinimg.com/736x/10/6e/cd/106ecd1bfe5ed1c3defb83ea0f87a334.jpg",
    tecnologias: ["React", "contextAPI", "tailwind"],
    demo: "https://www.instagram.com/kassa_129",
    categoria: "Contenidos",
  },
  {
    titulo: "Landing Kassa Apartamentos",
    descripcion:
      "Web desarrollada con Astro y Tailwind, embudo de marketing para estudios jurídicos.",
    imagen: legalWeb.src,
    tecnologias: ["Astro", "tailwind", "JavaScript"],
    demo: "https://kassaapartamentos.com",
    categoria: "Desarrollo Web",
  },
  {
    titulo: "Contenidos La Casa Del Rock",
    descripcion:
      "Web desarrollada con Astro y Tailwind, embudo de marketing para Obras Sociales.",
    imagen: mediCare.src,
    tecnologias: ["Astro", "tailwind", "JavaScript"],
    demo: "https://www.instagram.com/lacasadelrockcajica",
    categoria: "Contenidos",
  },
  {
    titulo: "Contenidos WeRock.space",
    descripcion:
      "Web desarrollada con Astro y Tailwind, embudo de marketing para asesorias fitness.",
    imagen: astroFit.src,
    tecnologias: ["Astro", "tailwind", "JavaScript"],
    demo: "https://www.instagram.com/werock.space",
    categoria: "Contenidos",
  },
  {
    titulo: "VJ para artistas",
    descripcion: "100 proyectos, realizados con HTML, CSS y JavaScript.",
    imagen:
      "https://i.pinimg.com/736x/3b/4f/4e/3b4f4e170fcb1795b88f4941f49df0a2.jpg",
    tecnologias: ["Next.js", "Tailwind", "GraphQL"],
    demo: "https://www.instagram.com/p/DPHU4SkkUAA",
    categoria: "Producción Audiovisual",
  },
  {
    titulo: "Landing HalconBot",
    descripcion:
      "App Web para organizar tus proyectos, hecha con React + Vite, TypeScript y Tailwind para los estilos.",
    imagen:
      "https://i.pinimg.com/736x/8f/f0/bb/8ff0bbd0e5844ed254bede44522c8338.jpg",
    tecnologias: ["React", "Vite", "TypeScript", "Tailwind"],
    demo: "https://halconbot.com/",
    categoria: "Desarrollo Web",
  },
  {
    titulo: "Contenidos Proyecto San Miguel",
    descripcion:
      "Pagina estatica desarrollada con Astro y tailwind como reto para una startup.",
    imagen: Verbenas.src,
    tecnologias: ["Astro", "Tailwind", "JavaScript"],
    demo: "https://www.instagram.com/proyectosanmiguelcajica",
    categoria: "Contenidos",
  },
  {
    titulo: "Página Web Tirano Fajardo",
    descripcion:
      "API RESTful construida con Express y MongoDB para gestionar tareas con operaciones CRUD, Registro de usuarios y login con JWT.",
    imagen: "https://miro.medium.com/1*47S4iWVwTicFkFL4-Z4uAA.png",
    tecnologias: ["Express", "Node.js", "MongoDB", "Mongoose"],
    demo: "https://tiranofajardo.co",
    categoria: "Desarrollo Web",
  },
];
