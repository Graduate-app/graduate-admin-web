import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { FunctionComponent } from 'react';
import GraduateForm from '../GraduateForm';
import { useGraduateStore } from '@/stores/graduateStore';
import { IGraduate } from '@/api/graduate';


interface AddGraduateDialogProps {
  open: boolean;
  onClose: () => void;
}

const AddGraduateDialog: FunctionComponent<AddGraduateDialogProps> = ({ open, onClose }) => {
  const { createGraduate } = useGraduateStore();
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        Додати випускника
        <IconButton
          style={{ position: 'absolute', right: 8, top: 8 }}
          onClick={onClose}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <GraduateForm graduate={null} onSubmit={(data) => {createGraduate(data as IGraduate); onClose();}} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Скасувати</Button>
        <Button type="submit" form="add-graduate-form" variant="contained">
          Додати
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddGraduateDialog;
