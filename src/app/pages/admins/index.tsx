import { useUserStore } from '@/stores/userStore';
import { useEffect, useState, type FC } from 'react';
import {
  AdminsContainer,
  AdminsWrapper,
  EmailText,
  HeaderWrapper,
  UserWrapper,
} from './styles';
import Button from '@/components/Button';
import { AccountCircle, AddRounded, Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useAdminStore } from '@/stores/adminStore';
import AdminList from '@/components/AdminList';
import ChangePasswordDialog from '@/components/ChangePasswordDialog';
import AddAdminDialog from '@/components/AddAdminDialog';

const AdminsPage: FC = () => {
  const [openChangePassword, setOpenChangePassword] = useState(false);
  const [openAddAdmin, setOpenAddAdmin] = useState(false);
  const { user } = useUserStore();
  const { admins, fetchAdmins } = useAdminStore();

  useEffect(() => {
    fetchAdmins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AdminsContainer>
      <HeaderWrapper>
        <UserWrapper>
          <AccountCircle fontSize="large" />
          <EmailText>{user?.email}</EmailText>
          <IconButton onClick={() => setOpenChangePassword(true)}>
            <Edit fontSize="medium" />
          </IconButton>
        </UserWrapper>
        {user?.superAdmin && (
          <Button
            startIcon={<AddRounded />}
            variant="contained"
            onClick={() => setOpenAddAdmin(true)}
          >
            Додати адміністратора
          </Button>
        )}
      </HeaderWrapper>
      <AdminsWrapper>
        {admins.map((admin) => (
          <AdminList key={admin.id} admin={admin} />
        ))}
      </AdminsWrapper>
      <ChangePasswordDialog
        open={openChangePassword}
        onClose={() => setOpenChangePassword(false)}
      />
      <AddAdminDialog
        open={openAddAdmin}
        onClose={() => setOpenAddAdmin(false)}
      />
    </AdminsContainer>
  );
};

export default AdminsPage;
