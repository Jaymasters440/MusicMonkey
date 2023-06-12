import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { useMutation,} from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

const Login = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);
  const [login, { loading }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log(event)
    console.log(userFormData)

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const {data} = await login(
        {
          variables: userFormData,
        }
      );
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      // setShowAlert(true);
    }
    setUserFormData({
      email: '',
      password: ''
    });
  };
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop is-3-widescreen">
              <form action="" noValidate validated={validated} className="box" onSubmit={handleFormSubmit}>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left">
                    <input
                      name='email'
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
                  <label className="label">Password</label>
                  <div className="control has-icons-left">
                    <input
                      name='password'
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
                {/* <div className="field">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={handleInputChange}
                    />
                    Remember me
                  </label>
                </div> */}
                {/* {errorMessage && <p>{errorMessage}</p>} */}
                <div className="field">
                  <button className="button is-success" type="submit">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
