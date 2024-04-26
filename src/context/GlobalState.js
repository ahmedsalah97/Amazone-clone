import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import AppReducer, { initialState } from "./AppReduser";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [token, setToken] = useState(null);

  useEffect(() => {
    localStorage.setItem("myBasket", JSON.stringify(state.basket));
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        dispatch: dispatch,
        setToken,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
export const useAuth = () => {
  return useContext(GlobalContext);
};
