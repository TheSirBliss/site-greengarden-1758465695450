// File: src/components/organisms/Header/Header.jsx
import React from 'react';
import { Box } from '../../atoms/Box/Box';
import { Image } from '../../atoms/Image/Image';
import { NavMenu } from '../../molecules/NavMenu/NavMenu';
import { CtaGroup } from '../../molecules/CtaGroup/CtaGroup';

export const Header = ({ logoSrc, links, activeLink, ...props }) => {
  return (
    <Box
      as="header"
      p="4"
      bg="ui.background"
      borderBottom="1px solid"
      borderColor="ui.border"
      {...props}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        maxWidth="1200px" // Limita la larghezza massima per schermi grandi
        mx="auto" // Centra il contenuto
      >
        {/* Sezione Sinistra: Logo */}
        <Image src={logoSrc} alt="Logo" height="40px" />

        {/* Sezione Centrale: Navigazione */}
        {/* Nascondiamo la navigazione su schermi piccoli per semplicità (in un progetto reale ci sarebbe un menu hamburger) */}
        <Box display={['none', 'none', 'block']}>
          <NavMenu links={links} activeLink={activeLink} />
        </Box>

        {/* Sezione Destra: Call to Action */}
        <Box display={['none', 'none', 'block']}>
          <CtaGroup />
        </Box>
      </Box>
    </Box>
  );
};