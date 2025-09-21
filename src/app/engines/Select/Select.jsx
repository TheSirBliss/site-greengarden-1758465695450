// File: src/components/atoms/Select/Select.jsx
import React from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const StyledSelect = styled.select`
  appearance: none; // Rimuove lo stile nativo del browser
  -webkit-appearance: none;
  -moz-appearance: none;
  
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.ui.text};
  background-color: ${({ theme }) => theme.colors.ui.background};
  border: 1px solid ${({ theme }) => theme.colors.ui.border};
  border-radius: ${({ theme }) => theme.borders.radii.md};
  padding: ${({ theme }) => theme.spacing['space-2']} ${({ theme }) => theme.spacing['space-3']};
  padding-right: ${({ theme }) => theme.spacing['space-8']}; // Spazio per la freccia
  width: 100%;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.brand.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.brand.primary}30;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.neutral['gray-100']};
    cursor: not-allowed;
  }
`;

const ArrowIcon = styled.div`
  position: absolute;
  top: 50%;
  right: ${({ theme }) => theme.spacing['space-3']};
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  pointer-events: none; // Rende l'icona "cliccabile attraverso"
  color: ${({ theme }) => theme.colors.neutral['gray-500']};
`;

export const Select = ({ options = [], placeholder, disabled, ...props }) => {
  return (
    <SelectWrapper>
      <StyledSelect disabled={disabled} {...props}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      <ArrowIcon>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
        </svg>
      </ArrowIcon>
    </SelectWrapper>
  );
};