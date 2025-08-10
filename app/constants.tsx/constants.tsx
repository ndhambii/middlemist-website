import { url } from "inspector";

export const navLinks = [
  {
    id: 1,
    name: "Acerca",
    url: "#acerca",
  },
  {
    id: 2,
    name: "Preçário",
    url: "#precario",
  },
  {
    id: 3,
    name: "Testemunhos",
    url: "#testemunhos",
  },

  {
    id: 4,
    name: "Marcações",
    url: "#marcacoes",
  },
];

export const precos: { id: number; name: string; price: string }[] = [
  { id: 1, name: "Axila", price: "300MZN" },
  { id: 2, name: "Virilha simples", price: "600MZN" },
  { id: 3, name: "Virilha completa", price: "650MZN" },
  { id: 4, name: "Perna completa", price: "600MZN" },
  { id: 5, name: "Meia perna", price: "500MZN" },
  { id: 6, name: "Barriga/costas", price: "350MZN" },
  { id: 7, name: "Buço/queixo", price: "250MZN" },
  { id: 8, name: "Meio braço", price: "350MZN" },
  { id: 9, name: "Braço completo", price: "450MZN" },
];

interface Testimonial {
  avatar?: string; // Optional, in case some testimonials don't have an avatar
  name: string;
  role: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    avatar: "/jedalzira.png",
    name: "jedalzira",
    role: "Cliente de Virilha Completa",
    text: "Uma mulher depilada não quer guerra com ninguém 🥹❤️",
    rating: 5,
  },
  {
    avatar: "/wilma.png",
    name: "wilma________a",
    role: "Cliente de Axila & Meia Perna",
    text: "Faço com ela há dois anos e super recomendo ❤️",
    rating: 5,
  },
  {
    name: "nicol_fungateee.e",
    role: "Cliente de Buço/Queixo",
    text: "Amei tanto o atendimento dela, 🥹🥹🥹❤️❤️❤️",
    rating: 5,
  },
];
