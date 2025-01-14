import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import LoadingPage from '@app/pages/loading';
import { Main, PageSection } from './styles';
import { homeBasePath } from '@app/routerPathes';
import Sidebar from '@app/Sidebar';
import { useUserStore } from '@/stores/userStore';

const Layout: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const recoverFromLocalStorage = useUserStore(
    (state) => state.recoverFromLocalStorage
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserLogin = async () => {
      if (!user) {
        const result = await recoverFromLocalStorage();
        if (!result) {
          navigate('/login');
          return;
        }
      }

      if (location.pathname === '/') {
        navigate(`/${homeBasePath}`);
      }

      setLoading(false);
    };

    setLoading(false);
    checkUserLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return loading ? (
    <LoadingPage />
  ) : (
    <Main>
      <Sidebar />
      <PageSection>
        <Outlet />
      </PageSection>
    </Main>
  );
};

export default Layout;
