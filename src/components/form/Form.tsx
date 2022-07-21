import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import * as yup from "yup";
import Context from "../../context/Context";
import useLogin from "../../hooks/useLogin";
import { IFormInputs, TAutoComplete } from "../../types";
import { ROUTES } from "../../constants";
import ServerError from "../serverError/ServerError";
import Loader from "../loader/Loader";
import Field from "../field/Field";
import Checkbox from "../checkbox/Checkbox";
import SubmitButton from "../submitButton/SubmitButton";

const StyledForm = styled.form`
  position: relative;
  margin: auto;
  max-width: 640px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const schema = yup.object({
  email: yup.string().required('Обязательное поле').email('Введите валидный email'),
  password: yup.string().required('Обязательное поле').min(8, 'Не менее 8 символов'),
  remember: yup.boolean(),
});

const Form = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(Context);
  const { loading, error, status, data, dispatch } = useLogin();
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    mode: "onChange",
    resolver: yupResolver(schema)
  });

  const hasErrors = Boolean(errors.email || errors.password);

  const rememberMe = localStorage.getItem('rememberMe') as TAutoComplete || 'off';

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    dispatch(data);
    localStorage.setItem('rememberMe', data.remember ? 'on' : 'off');
  }

  useEffect(() => {
    if (!status || !data) {
      return;
    }
    
    setUser(data.email);
    navigate(ROUTES.PROFILE);
  }, [data, navigate, setUser, status])

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <ServerError message={error} />
      <Field 
        name="email" 
        type="email" 
        label="Логин" 
        autoComplete={rememberMe}
        error={errors.email?.message} 
        props={register("email", { required: true })} 
      />
      <Field 
        name="password" 
        type="password" 
        label="Пароль" 
        autoComplete={rememberMe}
        error={errors.password?.message} 
        props={register("password", { required: true })} 
      />
      <Checkbox 
        name="remember"
        label="Запомнить пароль"
        props={register("remember")}
      />
      <SubmitButton name="Войти" isDisabled={loading || hasErrors} />
      <Loader isOn={loading} />
    </StyledForm>
  )
}

export default Form;