import styled from 'styled-components';
import { InputBase, inputBaseClasses } from '@mui/material';


export const InputContainer = styled.article`
  border-radius: 8px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.light.lighterGray};

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  transition: all 500ms ease;
`;

export const Label = styled.label`
  display: flex;
  padding: 16px;
`;

export const InputField = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: 500;
  line-height: 18px;
  font-size: 14px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.dark.gray};
  }
`;

export const InputElement = styled(InputBase)`
  background-color: #fff;
  height: 50px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.light.lighterGray};

  transition: all 0.3s ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  .${inputBaseClasses.input} {
    padding: 0;
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.font.family.montserrat};
    font-weight: 500;
    line-height: 18px;
    font-size: 14px;
  }
`;
