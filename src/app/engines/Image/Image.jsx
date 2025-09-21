// File: src/components/atoms/Image/Image.jsx
import React from 'react';
import styled from 'styled-components';
import { layout, space, border, shadow } from 'styled-system';

const StyledImage = styled.img`
  display: block; // Rimuove lo spazio extra sotto l'immagine
  max-width: 100%; // Garantisce responsività di base
  height: auto; // Mantieni l'aspect ratio
  object-fit: cover; // Per immagini all'interno di un contenitore fisso

  ${layout}
  ${space}
  ${border}
  ${shadow}
`;

export const Image = ({ src, alt, loading = 'lazy', ...props }) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      loading={loading}
      {...props}
    />
  );
};