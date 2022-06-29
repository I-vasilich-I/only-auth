import { useContext } from "react";
import Context from "../../context/Context";

const LogOut = () => {
  const { user, setUser } = useContext(Context);

  return (
    <>
    <p>{user}</p>
    <button onClick={() => setUser(null)}>Выйти</button>
    </>

  )
}

export default LogOut;