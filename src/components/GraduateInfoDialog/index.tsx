import { Dialog, DialogContent, IconButton, Typography } from '@mui/material';
import { useState, type FunctionComponent } from 'react';
import { IGraduate, IDegree } from '@/api/graduate/types';
import { DegreeList, InfoRow, TitleContainer } from './styles';
import { degreeMap, helpMap, majorMap, statusMap } from '@/map';
import EditIcon from '@mui/icons-material/Edit';
import UpdateGraduateDialog from '../UpdateGraduateDialog';
import { CheckCircle, Cancel } from '@mui/icons-material';
import { useGraduateStore } from '@/stores/graduateStore';

interface GraduateDialogProps {
  graduate: IGraduate;
  open: boolean;
  onClose: () => void;
}

const GraduateInfoDialog: FunctionComponent<GraduateDialogProps> = ({
  graduate,
  open,
  onClose,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { applyGraduate, rejectGraduate } = useGraduateStore();
 
  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <TitleContainer>
        <Typography variant="h6">
          {`${graduate.lastName} ${graduate.firstName} ${graduate.patronymic}`}
        </Typography>
        {graduate.status === 'pending' ? (
          <div>
            <IconButton onClick={() => applyGraduate(graduate.id)}>
              <CheckCircle />
            </IconButton>
            <IconButton onClick={() => rejectGraduate(graduate.id)}>
              <Cancel />
            </IconButton>
          </div>
        ) : graduate.status === 'applied' ? (
          <div>
            <IconButton onClick={() => rejectGraduate(graduate.id)}>
              <Cancel />
            </IconButton>
            <IconButton onClick={handleOpenDialog}>
              <EditIcon />
            </IconButton>
          </div>
        ) : (
          <div>
            <IconButton onClick={() => applyGraduate(graduate.id)}>
              <CheckCircle />
            </IconButton>
            <IconButton onClick={handleOpenDialog}>
              <EditIcon />
            </IconButton>
          </div>
        )}
      </TitleContainer>
      <DialogContent sx={{ padding: '5px 20px 20px 20px' }}>
        <InfoRow>
          <p>Email:</p>
          <span>{graduate.email}</span>
        </InfoRow>
        <InfoRow>
          <p>Статус:</p>
          <span>{statusMap[graduate.status]}</span>
        </InfoRow>
        <InfoRow>
          <p>Номер телефону:</p>
          <span>{graduate.phoneNumber}</span>
        </InfoRow>
        <InfoRow>
          <p>Робота:</p>
          <span>{graduate.job || 'Не вказано'}</span>
        </InfoRow>
        <InfoRow>
          <p>Допомога кафедрі:</p>
          <span>{helpMap[graduate.departamentHelping]}</span>
        </InfoRow>

        <DegreeList>
          <Typography variant="button" gutterBottom>
            Освіта:
          </Typography>
          {graduate.degree.map((deg: IDegree) => (
            <InfoRow key={deg.id}>
              <p>
                {degreeMap[deg.degree]} ({majorMap[deg.major]})
                <br /> Кваліфікаційна робота:{' '}
                {deg.qualificationWork || 'Не вказано'}
              </p>
              <span>{`${deg.enrollmentYear}–${deg.graduationYear}`}</span>
            </InfoRow>
          ))}
        </DegreeList>
      </DialogContent>

      <UpdateGraduateDialog
        open={dialogOpen}
        graduate={graduate}
        onClose={handleCloseDialog}
      />
    </Dialog>
  );
};

export default GraduateInfoDialog;
