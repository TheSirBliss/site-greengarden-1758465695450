// File: src/components/atoms/Button/Button.jsx
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  border-radius: ${({ theme }) => theme.borders.radii.md};
  padding: ${({ theme }) => theme.spacing['space-3']} ${({ theme }) => theme.spacing['space-4']};
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  background-color: ${({ theme, variant }) => variant === 'primary' ? theme.colors.brand.primary : 'transparent'};
  color: ${({ theme, variant }) => variant === 'primary' ? theme.colors.ui.surface : theme.colors.brand.primary};
  border-color: ${({ theme, variant }) => variant === 'secondary' ? theme.colors.brand.primary : 'transparent'};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutral['gray-300']};
    color: ${({ theme }) => theme.colors.neutral['gray-500']};
    border-color: transparent;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows['shadow-md']};
  }
`;

export const Button = ({ children, variant = 'primary', disabled = false, ...props }) => {
  return (
    <StyledButton variant={variant} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};