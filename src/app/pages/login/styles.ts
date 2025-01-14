import styled from 'styled-components';


export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.black};
  min-width: 32vw;
`;

export const Divider = styled.div`
  height: 0px;
`;

export const ErrorText = styled.span`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  color: ${({ theme }) => theme.colors.red};
`;
