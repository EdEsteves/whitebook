import { useState, useEffect, useContext } from 'react';

import * as S from './styles'
import FakeLoginContext from '../../contexts/FakeLoginContext';

const FakeLogin: React.FC = () => {
	const { isLogged, setIsLogged, email, setEmail } = useContext(FakeLoginContext);
  // const [email, setEmail] = useState<string>('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('fakelogin');
    if (storedEmail) {
			setIsLogged(true)
      setEmail(storedEmail);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('fakelogin', email);
    
    setIsLogged(true)
		setEmail(email)
  };

  return (
		<S.FakeLoginContainer>
			<S.FakeLoginTitle>Login</S.FakeLoginTitle>
			<S.FakeLoginForm onSubmit={handleSubmit}>
				<S.FakeLoginFieldset>
					<S.FakeLoginInput required={true} placeholder='Entre com seu email' type="email" value={email} onChange={handleInputChange} />
					<S.FakeLoginLabel>Email</S.FakeLoginLabel>
				</S.FakeLoginFieldset>
				<S.FakeLoginButton type="submit">Entrar</S.FakeLoginButton>
			</S.FakeLoginForm>
		</S.FakeLoginContainer>
  );
};

export default FakeLogin;
