// File: src/components/organisms/Hero/Hero.jsx
import React from 'react';
import { Box } from '../../atoms/Box/Box';
import { HeroContent } from '../../molecules/HeroContent/HeroContent';

// L'organismo combina la molecola di contenuto con il layout e lo sfondo
export const Hero = ({ title, subtitle, backgroundImage, ...props }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={{ _: 'center', md: 'flex-start' }} // Centrato mobile, a sinistra desktop
      minHeight="70vh" // Occupa una porzione significativa dello schermo
      p={{ _: '4', md: '8' }} // Padding responsive
      position="relative" // Necessario per il corretto posizionamento dello sfondo
      {...props}
    >
      {/* Immagine di Sfondo con Overlay Scurito */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="neutral.gray-900"
        opacity="0.5"
        zIndex="0"
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundImage={`url(${backgroundImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
        zIndex="-1"
      />

      {/* Contenuto in primo piano */}
      <Box zIndex="1" maxWidth="600px" color="ui.surface">
        <HeroContent title={title} subtitle={subtitle} />
      </Box>
    </Box>
  );
};