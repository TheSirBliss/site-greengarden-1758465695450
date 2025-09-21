// File: src/components/atoms/Input/Input.jsx
import React from 'react';
import styled, { css } from 'styled-components';

const InputWrapper = styled.input`
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.ui.text};
  background-color: ${({ theme }) => theme.colors.ui.background};
  border: 1px solid ${({ theme }) => theme.colors.ui.border};
  border-radius: ${({ theme }) => theme.borders.radii.md};
  padding: ${({ theme }) => theme.spacing['space-2']} ${({ theme }) => theme.spacing['space-3']};
  width: 100%;
  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral['gray-500']};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.brand.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.brand.primary}30; // Blu con opacità
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutral['gray-100']};
    cursor: not-allowed;
  }

  /* Logica per lo stato di errore */
  ${({ error, theme }) =>
    error &&
    css`
      border-color: ${theme.colors.feedback.error};
      &:focus {
        box-shadow: 0 0 0 3px ${theme.colors.feedback.error}30;
      }
    `}
`;

export const Input = ({ type = 'text', placeholder = 'Enter text...', disabled = false, error = false, ...props }) => {
  return (
    <InputWrapper
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      error={error}
      {...props}
    />
  );
};