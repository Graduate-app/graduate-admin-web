import Button from '@/components/Button';
import { CircularProgress } from '@mui/material';
import styled from 'styled-components';


export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px 24px 24px;
  position: relative;
`;

export const ProductsWrapper = styled.div`
  margin-top: 30px;
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: left;
  gap: 16px 12px;
`;

export const SearchInputContainer = styled.article`
  display: flex;
  border-radius: 8px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.accent};
  }

  transition: all 500ms ease;

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const SearchInputLabel = styled.label`
  display: flex;
  column-gap: 10px;
  padding: 10px 16px;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: 500;
  line-height: 22px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const StyledCircularProgress = styled(CircularProgress)`
  display: block;
  padding: 8px;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 16px;
  width: 100%;
  padding: 16px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 16px;
  gap: 8px;
`;

export const FilterButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const FilterButton = styled(Button)`
  && {
    font-size: 14px;
    height: 30px;
  }
`;

