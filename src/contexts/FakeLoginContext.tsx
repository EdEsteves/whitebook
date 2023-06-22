import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
}

type UserInfo = {
  email: string;
  setEmail: (value: string) => void;
  isLogged: boolean,
  setIsLogged: (value: boolean) => void;
};

const FakeLoginContext = createContext<UserInfo>({
  email: '',
  setEmail: () => {},
  isLogged: false,
  setIsLogged: () => {},
});

export const FakeLoginProvider: React.FC<Props> = ({ children }) => {
  const [email, setEmail] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  return (
    <FakeLoginContext.Provider
      value={{
        email,
        setEmail,
        isLogged,
        setIsLogged
      }}
    >
      {children}
    </FakeLoginContext.Provider>
  );
};

export default FakeLoginContext;