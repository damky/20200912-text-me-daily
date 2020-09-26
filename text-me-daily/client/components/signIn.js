import { Formik, Form, Field, ErrorMessage } from 'formik'
import Btn from './btn';
import axios from 'axios';
import useSWR from 'swr'
import { useEffect, useState } from 'react'
import Router from 'next/router';


export function ErrorMsg({ children }) {
  return <div className="errorMsg">{children}</div>
}

export default function SignIn({ signin, signup, setNeedSignUp, setCreatedUser, serverUrl, tmd }) {
  const [logInError, setLogInError] = useState(false);
  const tmd_user = tmd.tmd_user;
  const setTmd_user = tmd.setTmd_user;
  // console.log('signin', tmd);

  // if (process.browser) {
  //   window.localStorage.setItem('tmd_user', JSON.stringify(tmd_user));
  // };

  const createUser = (values) => {
    try {
      return fetch(serverUrl + '/api/createuser',
        {
          method: "POST",
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(values)
        });
    } catch (err) {
      console.error(err);
      setLogInError(true);
    }
  };

  const logInAndSetCookies = async (values) => {
    // set up localstorage
    const result = await axios.post(serverUrl + '/api/login', values)
      .then(res => {
        return res.data;
      }).catch(err => { setLogInError(true); if (err) console.error(err); return err.data.ok });
    if (process.browser) {
      window.localStorage.setItem('tmd_user', JSON.stringify({ ...tmd_user, token: result.token, refreshToken: result.refreshToken, status: result.status, user: result.user }))
      setTmd_user({ ...tmd_user, token: result.token, refreshToken: result.refreshToken, status: result.status, user: result.user });
    }
    // useLocalStorage().removeItem('token');
    // useLocalStorage().removeItem('refreshToken');
    // useLocalStorage().removeItem('status');
    // useLocalStorage().setItem('token', result.token);
    // useLocalStorage().setItem('refreshToken', result.refreshToken);
    // useLocalStorage().setItem('status', result.status);
    // useLocalStorage().setItem('user', result.user);

    return result.ok
  }

  return (
    <>
      <Formik
        initialValues={{ email: 'doug@weomedia.com', password: 'P@ssw0rd' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'email required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          if (!values.password) {
            errors.password = 'password required'
          } else if (signup && !/^(?=.*\d)(?=.*[!\"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])([a-z]|[A-Z]|[0-9]|[!\"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~]){8,}$/.test(values.password)) {
            errors.password = ['needs to add:'];
            if (!/(?=.*\d)/.test(values.password)) {
              errors.password.push('numbers')
            } else {
              errors.password = errors.password.filter(m => m !== 'numbers');
            }
            if (!/(?=.*[!\"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~])/.test(values.password)) {
              if (errors.password.findIndex(m => m === 'special characters') === -1) {
                errors.password.push('special characters');
              }
            } else {
              errors.password = errors.password.filter(m => m !== 'special characters');
            }
            if (!/(?=.*[a-z])/.test(values.password)) {
              errors.password.push('lowercase')
            } else {
              errors.password = errors.password.filter(m => m !== 'lowercase');
            }
            if (!/(?=.*[A-Z])/.test(values.password)) {
              errors.password.push('uppercase')
            } else {
              errors.password = errors.password.filter(m => m !== 'uppercase');
            }
            if (!/.{8,}/.test(values.password)) {
              errors.password.push('at least 8')
            } else {
              errors.password = errors.password.filter(m => m !== 'at least 8');
            }
            errors.password = errors.password.join(',')
          }
          return errors;
        }}
        onSubmit={async (values) => {
          setLogInError(false);
          signin &&
            setTimeout(async () => {
              const cookiesSet = await logInAndSetCookies(values);
              if (cookiesSet) {
                Router.push('/dashboard');
              } else {
                console.error('submit error');
              }
              // alert(JSON.stringify(values, null, 2));
            }, 400);
          signup &&
            setTimeout(() => {
              createUser(values).then(res => {
                if (res.ok) {
                  // console.log(res)
                  // console.log('created');
                  // alert(JSON.stringify(values, null, 2));
                  setCreatedUser(true);
                  setNeedSignUp(false);
                } else {
                  res.json().then(res => console.error(res.msg));
                  setLogInError(true);
                }
              }).catch(err => { if (err) console.error(err) });
            }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {logInError && <ErrorMsg>email/password already exists or is wrong</ErrorMsg>}
            <Field
              placeholder="email"
              className="primary"
              type="email"
              name="email"
            />
            <ErrorMessage name="email" render={msg => <ErrorMsg>{msg}</ErrorMsg>} />
            <Field
              placeholder="password"
              className="primary"
              type="password"
              name="password"
            />
            <ErrorMessage name="password" render={msg => msg.split(',').map(m => <ErrorMsg key={m}>{m}</ErrorMsg>)} />
            <Btn name="submit" primary submit disabled={isSubmitting}>
              {signin && 'sign in' || signup && 'sign up'}
            </Btn>
            <ErrorMessage name="submit" render={msg => <ErrorMessage>{msg}</ErrorMessage>} />
          </Form>
        )}
      </Formik>
    </>
  )
}




