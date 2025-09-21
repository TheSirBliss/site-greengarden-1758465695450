// File: src/components/organisms/Hero/Hero.stories.jsx
import { Hero } from './Hero';

export default {
  title: 'Organisms/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    title: 'Costruisci Siti Web Straordinari, Automaticamente',
    subtitle: 'La nostra piattaforma AI-powered ti permette di creare siti professionali in pochi minuti, non mesi. Inizia gratis e lancia la tua idea oggi stesso.',
    backgroundImage: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80',
  },
};

export const AnotherExample = {
    args: {
      title: 'La Tua Prossima Grande Idea Inizia Qui',
      subtitle: 'Trasforma concetti in realtà con strumenti di design intelligenti e una piattaforma costruita per la velocità e la scalabilità.',
      backgroundImage: 'https://images.unsplash.com/photo-1557683311-eac92134e198?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
    },
  };