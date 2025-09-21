// File: src/components/atoms/Stack/Stack.jsx
import React from 'react';
import styled from 'styled-components';
import { space, layout, flexbox } from 'styled-system';

const StyledStack = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction === 'horizontal' ? 'row' : 'column')};
  
  // Applica lo spazio a tutti i figli tranne il primo
  & > * + * {
    ${({ direction, theme, spacing }) =>
      direction === 'horizontal'
        ? `margin-left: ${theme.spacing[`space-${spacing}`]};`
        : `margin-top: ${theme.spacing[`space-${spacing}`]};`}
  }

  ${space}
  ${layout}
  ${flexbox}
`;

export const Stack = ({ children, direction = 'vertical', spacing = '4', ...props }) => {
  return (
    <StyledStack direction={direction} spacing={spacing} {...props}>
      {children}
    </StyledStack>
  );
};