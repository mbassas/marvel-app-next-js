"use client";
import styled from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const TextInput: React.FC<Props> = ({ icon, ...props }) => (
  <InputWrapper>
    {icon}
    <StyledInput type="text" {...props} />
  </InputWrapper>
);

const InputWrapper = styled.div`
  align-items: center;
  border-width: 0 0 1px 0;
  border-color: #000;
  border-style: solid;
  display: flex;
  gap: 6px;
`;

const StyledInput = styled.input`
  border: 0;
  text-transform: uppercase;
  width: 100%;
  padding: 6px;

  &:active  {
    outline: none;
  }

  ::placeholder {
    text-transform: none;
  }
`;
