// File: src/components/atoms/Grid/Grid.jsx
import React from 'react';
import styled from 'styled-components';
import { space, layout, grid } from 'styled-system';

// Styled-system ha un helper anche per CSS Grid
const StyledGrid = styled.div`
  display: grid;
  ${space}
  ${layout}
  ${grid} // Aggiunge props come gridGap, gridTemplateColumns...
`;

export const Grid = ({ children, ...props }) => {
  return <StyledGrid {...props}>{children}</StyledGrid>;
};