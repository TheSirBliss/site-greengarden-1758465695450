// File: src/components/atoms/NavLink/NavLink.jsx
import React from 'react';
import styled, { css } from 'styled-components';

const StyledLink = styled.a`
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.neutral['gray-500']};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing['space-2']} ${({ theme }) => theme.spacing['space-3']};
  border-radius: ${({ theme }) => theme.borders.radii.md};
  transition: color 0.2s, background-color 0.2s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.ui.text};
    background-color: ${({ theme }) => theme.colors.neutral['gray-100']};
  }

  // Stile per il link attivo
  ${({ isActive, theme }) =>
    isActive &&
    css`
      color: ${theme.colors.brand.primary};
      font-weight: ${theme.typography.fontWeight.bold};
    `}
`;

export const NavLink = ({ children, href = '#', isActive = false, ...props }) => {
  return (
    <StyledLink href={href} isActive={isActive} {...props}>
      {children}
    </StyledLink>
  );
};