
import { createContext, useState, ReactNode, SetStateAction } from 'react';

type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType>(null!);



export const AuthProvider= ({ children }: { children: ReactNode }) => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }} >
     { children }
    </AuthContext.Provider>
    )
}

export default AuthContext;