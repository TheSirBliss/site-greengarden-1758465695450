// File: src/components/atoms/Textarea/Textarea.jsx
import React from 'react';
import styled, { css } from 'styled-components';

// Nota come gli stili siano quasi identici a quelli dell'Input
const StyledTextarea = styled.textarea`
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.ui.text};
  background-color: ${({ theme }) => theme.colors.ui.background};
  border: 1px solid ${({ theme }) => theme.colors.ui.border};
  border-radius: ${({ theme }) => theme.borders.radii.md};
  padding: ${({ theme }) => theme.spacing['space-2']} ${({ theme }) => theme.spacing['space-3']};
  width: 100%;
  min-height: 80px;
  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral['gray-500']};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.brand.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.brand.primary}30;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutral['gray-100']};
    cursor: not-allowed;
  }

  ${({ error, theme }) =>
    error &&
    css`
      border-color: ${theme.colors.feedback.error};
      &:focus {
        box-shadow: 0 0 0 3px ${theme.colors.feedback.error}30;
      }
    `}
`;

export const Textarea = ({ placeholder = 'Enter long text...', disabled = false, error = false, ...props }) => {
  return (
    <StyledTextarea
      placeholder={placeholder}
      disabled={disabled}
      error={error}
      {...props}
    />
  );
};