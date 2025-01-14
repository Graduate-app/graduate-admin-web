import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { useState, type FunctionComponent } from 'react';
import Input from '../Input';
import { ButtonsWrapper, ContentWrapper } from './styles';
import AdminApi from '@/api/admin';

interface ChangePasswordDialogProps {
  open: boolean;
  onClose: () => void;
}

const ChangePasswordDialog: FunctionComponent<ChangePasswordDialogProps> = ({
  open,
  onClose,
}) => {
  const [newPassword, setNewPassword] = useState('');

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>
        <Typography variant="h6">Бажаєте змінити пароль ?</Typography>
      </DialogTitle>
      <DialogContent>
        <ContentWrapper>
          <Input
            placeholder="Новий пароль"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            fullWidth
          />
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
                await AdminApi.changePassword(newPassword);
              }}
            >
              Змінити пароль
            </Button>
          </ButtonsWrapper>
        </ContentWrapper>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePasswordDialog;
