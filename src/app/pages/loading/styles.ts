import styled, { keyframes } from 'styled-components';


export const LoadingContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const opacityAnimation = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.3;
  }

  100% {
    opacity: 1;
  }
`;

export const LogoWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundBlack};

  padding: 20px;
  border-radius: 16px;
  animation: ${opacityAnimation} 1s ease-in-out infinite;
`;
