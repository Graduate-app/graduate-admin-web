import { TextField, Button, IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import {
  degreeOptions,
  majorOptions,
  departmentHelpingOptions,
} from './options';
import { Delete, Add } from '@mui/icons-material';
import { FunctionComponent } from 'react';
import { IGraduate } from '@/api/graduate/types';

interface GraduateFormProps {
  graduate: IGraduate | null;
  onSubmit: (data: unknown) => void;
}

const GraduateForm: FunctionComponent<GraduateFormProps> = ({
  graduate,
  onSubmit,
}) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: graduate?.firstName || '',
      lastName: graduate?.lastName || '',
      patronymic: graduate?.patronymic || '',
      email: graduate?.email || '',
      phoneNumber: graduate?.phoneNumber || '',
      job: graduate?.job || '',
      departamentHelping: graduate?.departamentHelping || 'nothing',
      degree: graduate
        ? graduate.degree
        : [
            {
              degree: 'bachelor',
              major: 'computerEngineering',
              enrollmentYear: '',
              graduationYear: '',
              qualificationWork: '',
            },
          ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'degree',
  });

  const handleAddEducation = () => {
    append({
      degree: 'bachelor',
      major: 'computerEngineering',
      enrollmentYear: '',
      graduationYear: '',
      qualificationWork: '',
    });
  };

  return (
    <>
      <form id="add-graduate-form" onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: 8 }} />
        <Grid container spacing={2}>
          <Grid size={4}>
            <TextField
              label="Ім'я"
              fullWidth
              {...register('firstName', { required: 'Це поле обов’язкове' })}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          </Grid>
          <Grid size={4}>
            <TextField
              label="Прізвище"
              fullWidth
              {...register('lastName', { required: 'Це поле обов’язкове' })}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          </Grid>
          <Grid size={4}>
            <TextField
              label="По батькові"
              fullWidth
              {...register('patronymic', { required: 'Це поле обов’язкове' })}
              error={!!errors.patronymic}
              helperText={errors.patronymic?.message}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label="Електронна пошта"
              fullWidth
              {...register('email', {
                required: 'Це поле обов’язкове',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Некоректна електронна адреса',
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label="Телефон"
              fullWidth
              {...register('phoneNumber', {
                required: 'Це поле обов’язкове',
              })}
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber?.message}
            />
          </Grid>
          <Grid size={12}>
            <TextField label="Місце роботи" fullWidth {...register('job')} />
          </Grid>
          <Grid size={12}>
            <Controller
              control={control}
              name="departamentHelping"
              render={({ field }) => (
                <TextField
                  select
                  label="Допомога кафедрі"
                  fullWidth
                  SelectProps={{ native: true }}
                  {...field}
                >
                  {departmentHelpingOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              )}
            />
          </Grid>
          {fields.map((field, index) => (
            <>
              <Typography variant="button" gutterBottom>
                Освіта {index + 1}
              </Typography>
              <Grid key={field.id} container spacing={2} alignItems="center">
                <Grid size={3}>
                  <Controller
                    control={control}
                    name={`degree.${index}.degree`}
                    render={({ field }) => (
                      <TextField
                        select
                        label="Ступінь"
                        fullWidth
                        SelectProps={{ native: true }}
                        {...field}
                      >
                        {degreeOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    )}
                  />
                </Grid>
                <Grid size={3}>
                  <Controller
                    control={control}
                    name={`degree.${index}.major`}
                    render={({ field }) => (
                      <TextField
                        select
                        label="Спеціальність"
                        fullWidth
                        SelectProps={{ native: true }}
                        {...field}
                      >
                        {majorOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </TextField>
                    )}
                  />
                </Grid>
                <Grid size={2}>
                  <TextField
                    label="Рік вступу"
                    fullWidth
                    {...register(`degree.${index}.enrollmentYear`, {
                      required: 'Це поле обов’язкове',
                    })}
                    error={!!errors.degree?.[index]?.enrollmentYear}
                    helperText={errors.degree?.[index]?.enrollmentYear?.message}
                  />
                </Grid>
                <Grid size={3}>
                  <TextField
                    label="Рік закінчення"
                    fullWidth
                    {...register(`degree.${index}.graduationYear`, {
                      required: 'Це поле обов’язкове',
                    })}
                    error={!!errors.degree?.[index]?.graduationYear}
                    helperText={errors.degree?.[index]?.graduationYear?.message}
                  />
                </Grid>
                <Grid size={1}>
                  <IconButton
                    onClick={() => remove(index)}
                    disabled={fields.length === 1}
                  >
                    <Delete />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid size={11}>
                <TextField
                  label="Кваліфікаційна робота"
                  fullWidth
                  {...register(`degree.${index}.qualificationWork`)}
                />
              </Grid>
            </>
          ))}
        </Grid>
        <Button
          onClick={handleAddEducation}
          startIcon={<Add />}
          style={{ marginTop: 16 }}
        >
          Додати освіту
        </Button>
      </form>
    </>
  );
};

export default GraduateForm;
