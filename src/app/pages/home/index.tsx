import { AddRounded, FilterAlt, SearchRounded } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';
import { Formik } from 'formik';
import { useEffect, useState, type FC } from 'react';
import {
  FilterButton,
  FilterButtonsWrapper,
  FilterWrapper,
  GridWrapper,
  HomeContainer,
  SearchInput,
  SearchInputContainer,
  SearchInputLabel,
  StyledCircularProgress,
} from './styles';
import GraduateList from '@/components/GraduateList';
import Button from '@/components/Button';
import { IGraduate } from '@/api/graduate/types';
import AddGraduateDialog from '@/components/AddGraduateDialog';
import { useGraduateStore } from '@/stores/graduateStore';
import LoadingPage from '../loading';
import handleGraduateFilter, {
  IFilterProps,
} from '@/utils/handleGraduateFilter';
import { Popover, Typography } from '@mui/material';
import Input from '@/components/Input';
import { LoadingContainer } from '../loading/styles';

const loading = false;
const HomePage: FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { graduates, error, fetchGraduates } = useGraduateStore();
  const [graduatesFiltered, setGraduatesFiltered] =
    useState<IGraduate[]>(graduates);
  const [filterProps, setFilterProps] = useState<IFilterProps>({
    search: '',
    status: 'applied',
    degree: '',
    enrollmentYear: null,
    graduationYear: null,
  });
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handleOpenDialog = () => setDialogOpen(true);
  const handleCloseDialog = () => setDialogOpen(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    fetchGraduates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setGraduatesFiltered(graduates);
  }, [graduates]);

  useEffect(() => {
    setGraduatesFiltered(handleGraduateFilter(graduates, filterProps));
  }, [filterProps, graduates]);

  return (
    <HomeContainer>
      <Grid
        container
        padding="18px 0px 8px 0px"
        style={{
          backgroundColor: '#fff',
        }}
        position="sticky"
        top="0"
        zIndex="1000"
      >
        <Grid />
        <Grid display="flex" size={2} justifyContent="start">
          <Button
            startIcon={<FilterAlt />}
            variant="contained"
            onClick={handleClick}
          >
            Фільтр
          </Button>
        </Grid>
        <Grid size={7}>
          <Formik
            initialValues={{
              search: '',
            }}
            onSubmit={(values) =>
              setFilterProps((prev) => ({ ...prev, ...values }))
            }
          >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
              <SearchInputContainer>
                <SearchInputLabel>
                  <SearchRounded className="text-accent" />
                  <SearchInput
                    name="search"
                    value={values.search}
                    onChange={(e) => {
                      handleChange(e);
                      handleSubmit();
                    }}
                    onBlur={handleBlur}
                    placeholder="Пошук"
                  />
                </SearchInputLabel>

                {loading && <StyledCircularProgress />}
              </SearchInputContainer>
            )}
          </Formik>
        </Grid>
        <Grid display="flex" size={3} justifyContent="end">
          <Button
            startIcon={<AddRounded />}
            variant="contained"
            onClick={() => handleOpenDialog()}
          >
            Додати випускника
          </Button>
        </Grid>
      </Grid>
      {loading && !graduates.length ? (
        <LoadingPage />
      ) : error || graduates.length === 0 || graduatesFiltered.length === 0 ? (
        <LoadingContainer>Випускників не знайдено</LoadingContainer>
      ) : (
        <GridWrapper>
          {graduatesFiltered.map((graduate) => (
            <GraduateList graduate={graduate as IGraduate} key={graduate.id} />
          ))}
        </GridWrapper>
      )}
      <AddGraduateDialog open={dialogOpen} onClose={handleCloseDialog} />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <FilterWrapper>
          <Typography variant="button" gutterBottom>
            Статус:
          </Typography>
          <FilterButtonsWrapper>
            <FilterButton
              variant="contained"
              disabled={filterProps.status === 'applied'}
              onClick={() =>
                setFilterProps((prev) => ({ ...prev, status: 'applied' }))
              }
            >
              Прийняті
            </FilterButton>
            <FilterButton
              variant="contained"
              disabled={filterProps.status === 'rejected'}
              onClick={() =>
                setFilterProps((prev) => ({ ...prev, status: 'rejected' }))
              }
            >
              Відхилені
            </FilterButton>
            <FilterButton
              variant="contained"
              disabled={filterProps.status === 'pending'}
              onClick={() =>
                setFilterProps((prev) => ({ ...prev, status: 'pending' }))
              }
            >
              В очікуванні
            </FilterButton>
            <FilterButton
              variant="contained"
              disabled={filterProps.status === ''}
              onClick={() =>
                setFilterProps((prev) => ({ ...prev, status: '' }))
              }
            >
              Усі
            </FilterButton>
          </FilterButtonsWrapper>
          <Typography variant="button" gutterBottom>
            Ступінь:
          </Typography>
          <FilterButtonsWrapper>
            <FilterButton
              variant="contained"
              disabled={filterProps.degree === 'bachelor'}
              onClick={() =>
                setFilterProps((prev) => ({ ...prev, degree: 'bachelor' }))
              }
            >
              Бакалавр
            </FilterButton>
            <FilterButton
              variant="contained"
              disabled={filterProps.degree === 'magister'}
              onClick={() =>
                setFilterProps((prev) => ({ ...prev, degree: 'magister' }))
              }
            >
              Магістр
            </FilterButton>
            <FilterButton
              variant="contained"
              disabled={filterProps.degree === 'aspirant'}
              onClick={() =>
                setFilterProps((prev) => ({ ...prev, degree: 'aspirant' }))
              }
            >
              Аспірант
            </FilterButton>
            <FilterButton
              variant="contained"
              disabled={filterProps.degree === ''}
              onClick={() =>
                setFilterProps((prev) => ({ ...prev, degree: '' }))
              }
            >
              Усі
            </FilterButton>
          </FilterButtonsWrapper>
          <Grid container gap={8}>
            <Grid width={150}>
              <Typography variant="button" gutterBottom>
                Рік вступу:
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="button" gutterBottom sx={{ width: '150px' }}>
                Рік закінчення:
              </Typography>
            </Grid>
          </Grid>
          <Grid container gap={8}>
            <Grid>
              <Input
                sx={{ width: '150px' }}
                type="number"
                value={filterProps.enrollmentYear === 0 ? '' : filterProps.enrollmentYear}
                onChange={(e) => setFilterProps((prev) => ({ ...prev, enrollmentYear: +e.target.value }))}
              />
            </Grid>
            <Grid>
              <Input
                sx={{ width: '150px' }}
                type="number"
                value={filterProps.graduationYear === 0 ? '' : filterProps.graduationYear}
                onChange={(e) => setFilterProps((prev) => ({ ...prev, graduationYear: +e.target.value === 0 ? null : +e.target.value }))}
              />
            </Grid>
          </Grid>
        </FilterWrapper>
      </Popover>
    </HomeContainer>
  );
};

export default HomePage;
