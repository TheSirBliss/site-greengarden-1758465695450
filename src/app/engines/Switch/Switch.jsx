// File: src/components/atoms/Switch/Switch.jsx
import React from 'react';
import styled from 'styled-components';

const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
`;

const HiddenInput = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.neutral['gray-300']};
  border-radius: ${({ theme }) => theme.borders.radii.full};
  transition: .4s;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    transition: .4s;
  }
`;

const SwitchLabel = styled.span`
  margin-left: ${({ theme }) => theme.spacing['space-3']};
  font-family: ${({ theme }) => theme.typography.fontFamily.body};
`;

const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;

  ${HiddenInput}:checked + ${Slider} {
    background-color: ${({ theme }) => theme.colors.brand.secondary};
  }

  ${HiddenInput}:focus + ${Slider} {
    box-shadow: 0 0 1px ${({ theme }) => theme.colors.brand.secondary};
  }

  ${HiddenInput}:checked + ${Slider}:before {
    transform: translateX(20px);
  }
`;


export const Switch = ({ checked, label, disabled, ...props }) => {
  return (
    <SwitchWrapper>
      <SwitchContainer>
        <HiddenInput checked={checked} disabled={disabled} {...props} readOnly/>
        <Slider />
      </SwitchContainer>
      {label && <SwitchLabel>{label}</SwitchLabel>}
    </SwitchWrapper>
  );
};