// File: src/components/atoms/Box/Box.jsx
import React from 'react';
import styled from 'styled-components';
import { space, layout, color, flexbox, border, shadow } from 'styled-system';

// Usiamo una libreria helper chiamata 'styled-system' per mappare facilmente le props ai nostri tokens.
// Prima installala con: npm install styled-system
const StyledBox = styled.div`
  ${space}   // Aggiunge props per margin (m, mx, my...) e padding (p, px, py...)
  ${layout}  // Aggiunge props per width, height, display...
  ${color}   // Aggiunge props per color, backgroundColor (bg)...
  ${flexbox} // Aggiunge props per layout flessibili (alignItems, justifyContent...)
  ${border}  // Aggiunge props per i bordi
  ${shadow}  // Aggiunge props per le ombre
`;

export const Box = ({ children, ...props }) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};