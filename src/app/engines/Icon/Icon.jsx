// File: src/components/atoms/Icon/Icon.jsx
import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.svg`
  display: inline-block;
  vertical-align: middle;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  color: ${({ theme, color }) => color || theme.colors.ui.text}; // Colore di default o custom

  path, circle {
    stroke: currentColor; // Usa il colore del testo per il tratto
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

export const Icon = ({ name, size = 24, color, ...props }) => {
  // Questo è un placeholder. In un sistema reale, 'name' verrebbe usato
  // per recuperare l'SVG corretto da una mappa o da una libreria.
  // Per ora, mostriamo un'icona "info" di esempio.
  const getIconSvg = (iconName) => {
    switch(iconName) {
      case 'info':
        return (
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 8v4M12 16h.01" />
        );
      case 'check':
        return (
          <polyline points="20 6 9 17 4 12" />
        );
      case 'x':
        return (
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        );
      default:
        return (
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 8v4M12 16h.01" /> // Default 'info'
        );
    }
  };


  return (
    <StyledIcon viewBox="0 0 24 24" size={size} color={color} {...props}>
      {getIconSvg(name)}
    </StyledIcon>
  );
};