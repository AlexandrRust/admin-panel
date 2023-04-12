import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { Formik, Form } from 'formik';

import { FaEnvelope, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

import { FormBox } from './common/FormBox.styled';
import { InputStyle } from './common/InputStyle.styled';
import { LoginInputBox } from './common/loginInputBox/LoginInputBox.styled';
import { LoginIconBox } from './common/loginIconBox/LoginIconBox.styled';
import theme from '../../theme/theme';

const LoginForm = () => {
  const [passwordShow, setPasswordShow] = useState('password');
  const ShowPassword = () => {
    if (passwordShow === 'password') {
      setPasswordShow('text');
    }
    if (passwordShow === 'text') {
      setPasswordShow('password');
    }
  };
  const dispath = useDispatch();
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={({ email, password }, actions) => {
        dispath(authOperations.logIn({ email, password }));
        actions.resetForm();
      }}
    >
      {props => (
        <FormBox>
          <Form
            // onSubmit={props.handleSubmit}
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '16px',
              boxSizing: 'border-box',
            }}
          >
            <LoginInputBox>
              <InputStyle
                type="email"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.email}
                name="email"
                placeholder="email"
              />
              <LoginIconBox>
                <FaEnvelope />
              </LoginIconBox>
            </LoginInputBox>

            <LoginInputBox>
              <InputStyle
                type={passwordShow}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.password}
                name="password"
                placeholder="password"
              />
              <LoginIconBox>
                {passwordShow === 'password' ? (
                  <FaRegEyeSlash onClick={ShowPassword} />
                ) : (
                  <FaRegEye onClick={ShowPassword} />
                )}
              </LoginIconBox>
            </LoginInputBox>

            {/* {props.errors.name && <div id="feedback">{props.errors.name}</div>} */}
            <button style={theme.btn.btnLogin} type="submit">
              Вхід
            </button>
          </Form>
        </FormBox>
      )}
    </Formik>
  );
};

export default LoginForm;
