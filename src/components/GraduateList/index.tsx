import { useState, type FunctionComponent } from 'react';
import { DegreeLabel, FullName, ListItem, StatusIcon } from './styles';
import { IGraduate } from '@/api/graduate/types';
import GraduateInfoDialog from '../GraduateInfoDialog';
import { getDegreeText, getStatusIcon } from '@/utils/handleGraduate';


interface GraduateListProps {
  graduate: IGraduate;
}

const GraduateList: FunctionComponent<GraduateListProps> = ({ graduate }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  return (
    <>
      <ListItem onClick={handleOpenDialog}>
        <StatusIcon>{getStatusIcon(graduate.status)}</StatusIcon>

        <FullName>
          {`${graduate.lastName} ${graduate.firstName} ${graduate.patronymic}`}
        </FullName>

        <DegreeLabel>{getDegreeText(graduate.degree)}</DegreeLabel>
      </ListItem>

      <GraduateInfoDialog
        graduate={graduate}
        open={dialogOpen}
        onClose={handleCloseDialog}
      />
    </>
  );
};

export default GraduateList;
