import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
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

    const timer = setTimeout(() => request(formData.email), 5000);
    return () => clearTimeout(timer);
  }, [formData, loading])

  useEffect(() => {
    if(status && formData) {
      setUser(formData.email);
      navigate(ROUTES.PROFILE);
    }
  }, [formData, navigate, setUser, status]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      {serverError && <p>{serverError}</p>}
      <label htmlFor="email">
      <p>Логин</p>
        <input type="email" id="email" {...register("email", { required: true })} />
        <p>{errors.email?.message}</p>
      </label>
      <label htmlFor="password">
        <p>Пароль</p> 
        <input type="password" id="password" autoComplete={rememberMe} {...register("password", { required: true })} />
        <p>{errors.password?.message}</p>
      </label>
      <label htmlFor="remember">
        Запомнить пароль
        <input type="checkbox" id="remember" {...register("remember")} />
      </label>
      <input type="submit" value="Войти" disabled={loading || hasErrors} />
      {loading && <span>Loading</span>}
    </form>
  )
}

export default LogIn;