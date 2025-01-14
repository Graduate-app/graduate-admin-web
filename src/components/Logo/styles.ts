import styled from 'styled-components';


export const LogoWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 8px;
  cursor: pointer;
`;

export const LogoText = styled.span`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: 24px;
  color: white;
  font-weight: bold;
`;
