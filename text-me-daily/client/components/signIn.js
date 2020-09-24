import { Formik, Form, Field, ErrorMessage } from 'formik'
import Btn from './btn';
import axios from 'axios';
import { Cookies } from "react-cookie";
import useSWR from 'swr'
import { useState } from 'react'
import Router from 'next/router';

export function ErrorMsg({ children }) {
  return <div className="errorMsg">{children}</div>
}

export default function SignIn({ signin, signup, setNeedSignUp, setCreatedUser, serverUrl }) {
  const [logInError, setLogInError] = useState(false);

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

  const logInAndSetCookies = (values) => {
    // set up cookies
    try {
      const cookies = new Cookies();
      axios.post(serverUrl + '/api/login', values)
        .then(res => {
          cookies.set('token', res.data.token);
          cookies.set('refreshToken', res.data.refreshToken);
          cookies.set('status', res.data.status);
          cookies.set('user', res.data.user);
        });

    } catch (err) {
      console.error(err);
      setLogInError(true);
    }
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
        onSubmit={async (values, { setSubmitting }) => {
          setLogInError(false);
          signin &&
            setTimeout(async () => {
              await logInAndSetCookies(values);
              Router.push('/dashboard');
              // alert(JSON.stringify(values, null, 2));
            }, 400);
          setSubmitting(false);
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
          setSubmitting(false);
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




