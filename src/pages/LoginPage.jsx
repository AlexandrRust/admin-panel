import { LoginContainer } from 'components/loginForm/common/loginContainer/LoginContainer.styled';
import LoginForm from 'components/loginForm/LoginForm';

const LoginPage = () => {
  return (
    <LoginContainer>
      <h2>Login</h2>
      <LoginForm />
    </LoginContainer>
  );
};

export default LoginPage;
