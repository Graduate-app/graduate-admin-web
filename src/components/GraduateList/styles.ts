import styled from 'styled-components';


export const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.light.gray};
  width: 100%;
  max-width: 600px;
  background: white;
  transition: box-shadow 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const StatusIcon = styled.div`
  flex-shrink: 0;
  
  .pending {
    color: #ffc107;
  }
  
  .applied {
    color: #4caf50;
  }
  
  .rejected {
    color: #f44336;
  }
`;

export const FullName = styled.p`
  flex-grow: 1;
  margin: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark.primary};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: 500;
`;

export const DegreeLabel = styled.div`
  flex-shrink: 0;
  padding: 4px 12px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.light.grayBg};
  color: ${({ theme }) => theme.colors.dark.secondary};
  font-size: 14px;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: 500;
`;
