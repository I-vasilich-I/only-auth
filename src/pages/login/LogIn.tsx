import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import ServerError from "../../components/serverError/ServerError";
import Loader from "../../components/loader/Loader";
import { ROUTES, THE_LOGIN } from "../../constants";
import Context from "../../context/Context";

interface IFormInputs {
  email: string;
  password: string;
  remember: boolean;
}

const schema = yup.object({
  email: yup.string().email().required('Обязательное поле'),
  password: yup.string().required('Обязательное поле').min(8, 'Не менее 8 символов'),
  remember: yup.boolean(),
});

const StyledForm = styled.form`
  position: relative;
  margin: auto;
  max-width: 640px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLabel = styled.label`
  width: 100%;
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  &:last-of-type {
    margin-bottom: 40px;
  }

  span {
    margin-top: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #E26F6F;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 20px;
  margin-top: 10px;
  background: #F5F5F5;
  border-radius: 8px;
  border: none;
  outline: none;

  &:invalid {
  }
  
  &.error {
    border: 1px solid #E26F6F;
  }
`;

const Button = styled.input`
  position: relative;
  max-width: 640px;
  width: 100%;
  height: 60px;

  border-radius: 8px;
  border: none;
  outline: none;
  background: #4A67FF;
  cursor: pointer;

  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
  transition: all .3s ease-in-out;

  &:disabled {
    background: #99A9FF;
  }

  &:hover:not(:disabled), &:focus {
    background: #2449fe;
  }
`;

const CheckBox = styled.input`
  width: 10px;
  height: 10px;
  margin-left: 5px;
  margin-right: 24px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border: 1px solid #000000;
    border-radius: 4px;
  }

  &:checked::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: #4A67FF;
    border-radius: 2px;
  }
`

const LogIn = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [status, setStatus] = useState(false);
  const [formData, setFormData] = useState<IFormInputs | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });

  const hasErrors = Boolean(errors.email || errors.password);
  const passwordErrorClass = errors.password ? 'error' : '';
  const emailErrorClass = errors.email ? 'error' : '';

  const rememberMe = localStorage.getItem('rememberMe') || 'off';

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    setLoading(true);
    setFormData(data);
    localStorage.setItem('rememberMe', data.remember ? 'on' : 'off');
  }

  const request = (email: string) => {
    if (email !== THE_LOGIN) {
      setServerError(`Пользователя ${email} не существует`);
      setLoading(false);
      return;
    }

    setStatus(true);
    setLoading(false);
  }

  useEffect(() => {
    if (!loading || !formData) return;

    const timer = setTimeout(() => request(formData.email), 4000);
    return () => clearTimeout(timer);
  }, [formData, loading])

  useEffect(() => {
    if(status && formData) {
      setUser(formData.email);
      navigate(ROUTES.PROFILE);
    }
  }, [formData, navigate, setUser, status]);

  useEffect(() => {
    if (!serverError) {
      return;
    }

    const timer = setTimeout(() => setServerError(''), 4000);
    return () => clearTimeout(timer);
  }, [serverError])

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <ServerError message={serverError} />
      <StyledLabel htmlFor="email">
        Логин
        <StyledInput type="email" id="email" className={emailErrorClass} {...register("email", { required: true })} />
        <span>{errors.email?.message}</span>
      </StyledLabel>
      <StyledLabel htmlFor="password">
        Пароль
        <StyledInput type="password" id="password" className={passwordErrorClass} autoComplete={rememberMe} {...register("password", { required: true })} />
        <span>{errors.password?.message}</span>
      </StyledLabel>
      <StyledLabel htmlFor="remember">
        <CheckBox type="checkbox" id="remember" {...register("remember")} />
        Запомнить пароль
      </StyledLabel>
      <Button type="submit" value='Войти' disabled={loading || hasErrors} />
      <Loader isOn={loading} />
    </StyledForm>
  )
}

export default LogIn;