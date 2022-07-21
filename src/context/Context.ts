import { createContext } from "react";

interface IProps {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>
}

const Context = createContext<IProps>({
  user: null,
  setUser: () => {},
});

export default Context;