import styled from 'styled-components';
import Button from '@/components/Button';


export const SidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.blue};
  color: white;
  width: 300px;
  height: 100vh;
  position: sticky;
  top: 0;
`;

export const SidebarButton = styled(Button) <{
  $active: boolean;
}>`
  && {
    justify-content: flex-start;
    border-radius: 0px;
    padding: 12px 20px;
    height: auto;

    font-size: 16px;
    font-weight: bold;
  }
`;

export const ButtonWraper = styled.div`
  padding: 16px 0;
`;

export const LogoutWrapper = styled.div`
  padding: 16px 0;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
