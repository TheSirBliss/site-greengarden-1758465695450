// File: src/components/atoms/Badge/Badge.jsx
import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';

const StyledBadge = styled.span`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing['space-1']} ${({ theme }) => theme.spacing['space-2']};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border-radius: ${({ theme }) => theme.borders.radii.full};
  text-transform: uppercase;
  
  // Applica i colori in base alla prop 'variant'
  color: ${({ theme, variant }) => theme.colors.ui.surface};
  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case 'success':
        return theme.colors.feedback.success;
      case 'warning':
        return theme.colors.feedback.warning;
      case 'error':
        return theme.colors.feedback.error;
      case 'info':
      default:
        return theme.colors.feedback.info;
    }
  }};

  ${space}
`;

export const Badge = ({ children, variant = 'info', ...props }) => {
  return <Badge {...props} variant={variant}>{children}</Badge>;
};