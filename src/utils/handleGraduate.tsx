import { IGraduate } from "@/api/graduate/types";
import { Pending, CheckCircle, Cancel } from '@mui/icons-material';

export const getStatusIcon = (status: IGraduate['status']) => {
  switch (status) {
    case 'applied':
      return <CheckCircle className="applied" />;
    case 'rejected':
      return <Cancel className="rejected" />;
    case 'pending':
    default:
      return <Pending className="pending" />;
  }
};

export const getDegreeText = (degrees: IGraduate['degree']) => {
  const hasBachelor = degrees.some((d) => d.degree === 'bachelor');
  const hasMaster = degrees.some((d) => d.degree === 'magister');
  const hasAspirant = degrees.some((d) => d.degree === 'aspirant');

  if (hasBachelor && hasMaster && hasAspirant) return 'Бак/Маг/Асп';
  if (hasBachelor && hasMaster) return 'Бак/Маг';
  if (hasBachelor) return 'Бакалавр';
  if (hasMaster) return 'Магістр';
  if (hasAspirant) return 'Аспірант';
  return '';
};