import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { useState, type FunctionComponent } from 'react';
import Input from '../Input';
import { ButtonsWrapper, ContentWrapper, CheckboxWrapper } from './styles';
import { useAdminStore } from '@/stores/adminStore';
import { Checkbox } from '@mui/material';

interface AddAdminDialogProps {
  open: boolean;
  onClose: () => void;
}

const AddAdminDialog: FunctionComponent<AddAdminDialogProps> = ({
  open,
  onClose,
}) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [superAdmin, setSuperAdmin] = useState(false);

  const { createAdmin } = useAdminStore();

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <Typography variant="h6">Бажаєте додати адміністратора?</Typography>
      </DialogTitle>
      <DialogContent>
        <ContentWrapper>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <Input
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            fullWidth
          />
          <CheckboxWrapper>
            <Typography variant="body1">Права суперадміна:</Typography>

            <Checkbox
              checked={superAdmin}
              onChange={(e) => setSuperAdmin(e.target.checked)}
            />
          </CheckboxWrapper>
          <ButtonsWrapper>
            <Button
              variant="contained"
              color="inherit"
              onClick={() => onClose()}
            >
              Скасувати
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={async () => {
                onClose();
                createAdmin(email, password, superAdmin);
              }}
            >
              Додати
            </Button>
          </ButtonsWrapper>
        </ContentWrapper>
      </DialogContent>
    </Dialog>
  );
};

export default AddAdminDialog;
