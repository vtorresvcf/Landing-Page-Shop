import movil from "../img/movil.jpg";
import laptop from "../img/laptop.jpg";
import auriculares from "../img/auriculares.jpg";
import reloj from "../img/reloj.jpg";
import camara from "../img/camara.jpg";
import tablet from "../img/tablet.jpg";
import altavoz from "../img/altavoz.jpg";
import teclado from "../img/teclado.jpg";
import monitor from "../img/monitor.jpg";
import mochila from "../img/mochila.jpg";

export const productos = [
  {
    id: Math.random().toString(36).slice(2),
    titulo: "Smartphone ",
    descripcion:
      "Un smartphone de última generación con una cámara impresionante y una batería de larga duración.",
    imagen: movil,
    precio: "310€",
    cantidad: 1,
  },
  {
    id: Math.random().toString(36).slice(2),
    titulo: "Laptop",
    descripcion:
      "Una laptop ligera y potente, perfecta para trabajar desde cualquier lugar.",
    imagen: laptop,
    precio: "650€",
    cantidad: 1,
  },
  {
    id: Math.random().toString(36).slice(2),
    titulo: "Auriculares Bluetooth",
    descripcion:
      "Auriculares inalámbricos con cancelación de ruido y una excelente calidad de sonido.",
    imagen: auriculares,
    precio: "40€",
    cantidad: 1,
  },
  {
    id: Math.random().toString(36).slice(2),
    titulo: "Reloj Inteligente",
    descripcion:
      "Un reloj inteligente con monitoreo de salud y notificaciones en tiempo real.",
    imagen: reloj,
    precio: "212€",
    cantidad: 1,
  },
  {
    id: Math.random().toString(36).slice(2),
    titulo: "Cámara Digital",
    descripcion:
      "Cámara digital de alta resolución con múltiples modos de disparo y grabación de video en 4K.",
    imagen: camara,
    precio: "481€",
    cantidad: 1,
  },
  {
    id: Math.random().toString(36).slice(2),
    titulo: "Tablet",
    descripcion:
      "Tablet con pantalla de alta resolución y gran capacidad de almacenamiento.",
    imagen: tablet,
    precio: "300€",
    cantidad: 1,
  },
  {
    id: Math.random().toString(36).slice(2),
    titulo: "Altavoz Inteligente",
    descripcion: "Altavoz con asistente virtual integrado y control por voz.",
    imagen: altavoz,
    precio: "84€",
    cantidad: 1,
  },
  {
    id: Math.random().toString(36).slice(2),
    titulo: "Teclado Mecánico",
    descripcion:
      "Teclado mecánico con retroiluminación RGB y teclas personalizables.",
    imagen: teclado,
    precio: "95€",
    cantidad: 1,
  },
  {
    id: Math.random().toString(36).slice(2),
    titulo: "Monitor UltraWide",
    descripcion:
      "Monitor UltraWide con alta resolución y excelente reproducción de colores.",
    imagen: monitor,
    precio: "200€",
    cantidad: 1,
  },
  {
    id: Math.random().toString(36).slice(2),
    titulo: "Mochila para Laptop",
    descripcion:
      "Mochila resistente al agua con múltiples compartimentos para laptop y accesorios.",
    imagen: mochila,
    precio: "62€",
    cantidad: 1,
  },
];

export default { productos };
