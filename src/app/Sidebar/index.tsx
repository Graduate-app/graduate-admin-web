import { useNavigate, useLocation } from 'react-router-dom';
import { adminBasePath, homeBasePath } from '@app/routerPathes';
import {
  ButtonWraper,
  LogoutWrapper,
  MenuWrapper,
  SidebarButton,
  SidebarContainer,
} from './styles';
import { Group, AdminPanelSettings, Logout, Event } from '@mui/icons-material';
import Logo from '@/components/Logo';
import { useUserStore } from '@/stores/userStore';

const menuItems = [
  {
    id: 0,
    name: 'Список випускників',
    link: `/${homeBasePath}`,
    icon: <Group />,
    disable: false,
  },
  {
    id: 1,
    name: 'Список адміністраторів',
    link: `/${adminBasePath}`,
    icon: <AdminPanelSettings />,
    disable: false,
  },
  {
    id: 2,
    name: 'Зустрічі випускників',
    link: `/${adminBasePath}`,
    icon: <Event />,
    disable: true,
  },
];

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const logOut = useUserStore((state) => state.logOut);

  const handleLogout = () => {
    logOut();
    navigate('/login');
  }

  return (
    <SidebarContainer>
      <MenuWrapper>
        <Logo />
        <ButtonWraper>
          {menuItems.map((menuItem) => (
            <SidebarButton
              key={menuItem.id}
              startIcon={menuItem.icon}
              fullWidth
              variant={
                location.pathname.includes(menuItem.link) ? 'contained' : 'text'
              }
              $active={location.pathname.includes(menuItem.link)}
              disabled={menuItem.disable}
              onClick={() => navigate(menuItem.link)}
            >
              {menuItem.name}
            </SidebarButton>
          ))}
        </ButtonWraper>
      </MenuWrapper>
      <LogoutWrapper>
        <SidebarButton
          $active={false}
          fullWidth
          variant="text"
          startIcon={<Logout />}
          onClick={handleLogout}
        >
          Вийти
        </SidebarButton>
      </LogoutWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
