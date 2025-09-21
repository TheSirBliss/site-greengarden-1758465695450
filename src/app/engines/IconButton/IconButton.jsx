// File: src/components/atoms/IconButton/IconButton.jsx
import React from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon/Icon'; // Importiamo il nostro atomo Icon

const StyledIconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: ${({ theme }) => theme.spacing['space-2']};
  border-radius: ${({ theme }) => theme.borders.radii.full}; // Spesso sono tondi
  cursor: pointer;
  transition: background-color 0.2s;
  color: ${({ theme }) => theme.colors.neutral['gray-500']};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral['gray-100']};
    color: ${({ theme }) => theme.colors.ui.text};
  }
`;

export const IconButton = ({ iconName, iconSize = 24, label, ...props }) => {
  return (
    <StyledIconButton aria-label={label} {...props}>
      <Icon name={iconName} size={iconSize} />
    </StyledIconButton>
  );
};