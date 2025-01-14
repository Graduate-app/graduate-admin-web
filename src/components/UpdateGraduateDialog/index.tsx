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
import { IGraduate } from '@/api/graduate/types';
import { useGraduateStore } from '@/stores/graduateStore';


interface UpdateGraduateDialogProps {
  open: boolean;
  graduate: IGraduate;
  onClose: () => void;
}

const UpdateGraduateDialog: FunctionComponent<UpdateGraduateDialogProps> = ({ open, graduate, onClose }) => {
  const { updateGraduate } = useGraduateStore();

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        Редагувати випускника
        <IconButton
          style={{ position: 'absolute', right: 8, top: 8 }}
          onClick={onClose}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <GraduateForm graduate={graduate as IGraduate} onSubmit={(data) => {updateGraduate(graduate.id, data as Partial<IGraduate>); onClose()}} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Скасувати</Button>
        <Button type="submit" form="add-graduate-form" variant="contained">
          Зберегти
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateGraduateDialog;
