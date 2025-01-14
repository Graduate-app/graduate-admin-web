import styled from "styled-components";

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  padding: 6px 16px;
  background: ${({ theme }) => theme.colors.light.background};
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.light.hover};
  }

  p {
    margin: 0;
    font-size: 18px;
    font-family: ${({ theme }) => theme.font.family.montserrat};
    color: ${({ theme }) => theme.colors.dark.primary};
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  span {
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.dark.secondary};
    font-family: ${({ theme }) => theme.font.family.montserrat};
  }
`;

export const DegreeList = styled.div`
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.light.gray};

  > div {
    background: ${({ theme }) => theme.colors.light.background};
    padding: 8px 16px;
    border-radius: 8px;
    
    &:last-child {
      margin-bottom: 0;
    }

    p {
      color: ${({ theme }) => theme.colors.dark.secondary};
      font-size: 17px;
      font-family: ${({ theme }) => theme.font.family.montserrat};
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 16px 0 20px;
`;