import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import gifBackground from './black-particle.gif';

const Login = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [login, { loading }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: userFormData,
      });
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }
    setUserFormData({
      email: '',
      password: '',
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="hero-background"
      style={{
        backgroundImage: `url(${gifBackground})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        className="column is-5-tablet is-4-desktop is-3-widescreen"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <form action="" noValidate validated={validated} className="box" onSubmit={handleFormSubmit}>
          <div className="field">
            <label className="label" style={{ textAlign: 'center' }}>
              Email
            </label>
            <div className="control has-icons-left">
              <input
                name="email"
                type="email"
                placeholder="e.g. bobsmith@gmail.com"
                className="input"
                required
                value={userFormData.email}
                onChange={handleInputChange}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label" style={{ textAlign: 'center' }}>
              Password
            </label>
            <div className="control has-icons-left">
              <input
                name="password"
                type="password"
                placeholder="*******"
                className="input"
                required
                value={userFormData.password}
                onChange={handleInputChange}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-lock"></i>
              </span>
            </div>
          </div>
          <div className="field" style={{ textAlign: 'center' }}>
            <button className="button is-success" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
