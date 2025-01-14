import { type FunctionComponent } from 'react';
import { EmailIcon, EmailText, ListItem } from './styles';
import { Delete, Email } from '@mui/icons-material';
import { IAdmin } from '@/api/admin';
import { IconButton } from '@mui/material';
import { useUserStore } from '@/stores/userStore';
import { useAdminStore } from '@/stores/adminStore';

interface AdminListProps {
  admin: IAdmin;
}

const AdminList: FunctionComponent<AdminListProps> = ({ admin }) => {
  const { deleteAdmin } = useAdminStore()


  const { user } = useUserStore();

  return (
    <>
      <ListItem>
        <EmailIcon>
          <Email />
        </EmailIcon>

        <EmailText>{admin.email}</EmailText>

        {(user?.superAdmin && user?.email !== admin.email) && (
          <IconButton onClick={() => deleteAdmin(admin.id)}>
            <Delete />
          </IconButton>
        )}
      </ListItem>
    </>
  );
};

export default AdminList;
