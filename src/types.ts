interface IFormInputs {
  email: string;
  password: string;
  remember: boolean;
}

type TAutoComplete = 'on' | 'off';

export type { IFormInputs, TAutoComplete };
