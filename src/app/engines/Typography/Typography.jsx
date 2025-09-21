// File: src/components/atoms/Typography/Typography.jsx
import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

const StyledText = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  color: ${({ theme, color }) => color || theme.colors.ui.text};

  // Stili per le diverse varianti di testo (heading, body, caption etc.)
  ${({ theme, variant }) => {
    switch (variant) {
      case 'h1':
        return `
          font-size: ${theme.typography.fontSize.xl};
          font-weight: ${theme.typography.fontWeight.bold};
          margin-bottom: ${theme.spacing['space-4']};
        `;
      case 'h2':
        return `
          font-size: ${theme.typography.fontSize.lg};
          font-weight: ${theme.typography.fontWeight.bold};
          margin-bottom: ${theme.spacing['space-3']};
        `;
      case 'h3':
        return `
          font-size: ${theme.typography.fontSize.base};
          font-weight: ${theme.typography.fontWeight.bold};
          margin-bottom: ${theme.spacing['space-2']};
        `;
      case 'body':
        return `
          font-size: ${theme.typography.fontSize.base};
          font-weight: ${theme.typography.fontWeight.regular};
          line-height: 1.5;
          margin-bottom: ${theme.spacing['space-3']};
        `;
      case 'caption':
        return `
          font-size: ${theme.typography.fontSize.sm};
          font-weight: ${theme.typography.fontWeight.regular};
          color: ${theme.colors.neutral['gray-500']};
          margin-bottom: ${theme.spacing['space-1']};
        `;
      default:
        return `
          font-size: ${theme.typography.fontSize.base};
          font-weight: ${theme.typography.fontWeight.regular};
          line-height: 1.5;
        `;
    }
  }}

  ${space} // Per margin e padding
`;

export const Typography = ({ children, variant = 'body', as, ...props }) => {
  // 'as' permette di renderizzare il componente con un tag HTML diverso (es. h1, span)
  return (
    <StyledText as={as || (variant.startsWith('h') ? variant : 'p')} variant={variant} {...props}>
      {children}
    </StyledText>
  );
};