import styled from 'styled-components';


export const AdminsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 24px 24px 24px;
  position: relative;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid #e5e7eb;
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;

  & > svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const EmailText = styled.span`
  font-weight: 500;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

export const AdminsWrapper = styled.div`
  margin-top: 30px;
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: left;
  gap: 16px 12px;
`;