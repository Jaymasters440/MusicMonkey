import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';



const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [addProfile, { data }] = useMutation(ADD_PROFILE);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState, username:formState.email },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
          <div className="column is-5-tablet is-4-desktop is-3-widescreen">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form action=""
              className="box" onSubmit={handleFormSubmit}>
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control has-icons-left">
                <input
                  className="input"
                  placeholder="Your username"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange}
                />
                </div>
                </div>
                 <div className="field">
                 <label className="label">Email</label>
                 <div className="control has-icons-left">
                <input
                  className="input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                />
                </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control has-icons-left">
                <input
                  className="input"
                  placeholder="Your password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                </div>
                </div>
                <div className="field">
                <button
                  className="button is-success"
                  type="submit"
                >
                  Submit
                </button>
                </div>
              </form>
            )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
