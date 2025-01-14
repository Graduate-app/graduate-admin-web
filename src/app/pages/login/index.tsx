import type { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { emailRegex } from '@regexes';
import {
  Divider, ErrorText, LoginContainer, LoginWrapper,
} from './styles';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useUserStore } from '@/stores/userStore';
import { useNavigate } from 'react-router-dom';

interface ILoginValues {
  email: string;
  password: string;
}

const LoginPage: FC = () => {
  const signInWithCredentials = useUserStore((state) => state.signInWithCredentials);
  const authError = useUserStore((state) => state.authError);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginValues>();

  const onSubmit: SubmitHandler<ILoginValues> = async (data) => {
    const result = await signInWithCredentials(data.email, data.password);
    if (result) {
      navigate('/');
    }
  };

  return (
    <LoginContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
      <LoginWrapper>
        <Divider />
          <Input
            placeholder="Email"
            {...register('email', {
              required: "Це поле обов'язкове для введення",
              pattern: {
                value: emailRegex,
                message: 'Ви ввели неправильний e-mail',
              },
            })}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

          <Input
            placeholder="Password"
            type="password"
            {...register('password', {
              required: "Це поле обов'язкове для введення",
            })}
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

          {authError && <ErrorText>Невдалий вхід</ErrorText>}

          <Button variant="contained" type="submit">
            Увійти
          </Button>
      </LoginWrapper>
        </form>
    </LoginContainer>
  );
};

export default LoginPage;
