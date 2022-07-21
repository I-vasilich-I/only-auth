import { useEffect, useState } from "react";
import { THE_LOGIN } from "../constants";
import { IFormInputs } from "../types";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [status, setStatus] = useState(false);
  const [data, setData] = useState<IFormInputs | null>(null)

  const request = (email: string) => {
    if (email !== THE_LOGIN) {
      setError(`Пользователя ${email} не существует`);
      setLoading(false);
      return;
    }

    setStatus(true);
    setLoading(false);
  }

  useEffect(() => {
    if (!data) {
      return;
    }

    setLoading(true);

    const timer = setTimeout(() => request(data.email), 4000);
    return () => clearTimeout(timer);
  }, [data])

  useEffect(() => {
    if (!error) {
      return;
    }

    const timer = setTimeout(() => setError(''), 4000);
    return () => clearTimeout(timer);
  }, [error])

  return { loading, error, status, data, dispatch: setData}
}

export default useLogin;