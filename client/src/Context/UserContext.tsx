import { createContext, Dispatch } from "react";

export interface ILogged {
  logged: string;
  setLogged: Dispatch<React.SetStateAction<string>>;
  admin: boolean;
  setAdmin: Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<ILogged | null>(null);
