import React, { Component, PropTypes } from 'react';
import yup from 'yup';
import { Form, Field, Input, PasswordInput, Button } from 'react-portland-ui';
import Layout from '../Layout';
import profileIcon from 'icons/profile.svg';
import lockIcon from 'icons/lock.svg';

export class Login extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      login: PropTypes.func.isRequired,
    }),
  };

  formSchema = yup.object({
    email: yup.string().required('is required'),
    password: yup.string().required('is required'),
  });

  handleValidSubmit = user => this.props.actions.login(user.email, user.password);

  render() {
    return (
      <Layout
        title="Login"
        transitionTo="/sign-up"
        altPrompt="Don't have an account?"
        altCallToAction="Sign up."
      >
        <Form
          schema={this.formSchema}
          onSubmit={this.props.actions.login}
          fluid
        >
          <Field
            type={Input}
            name="email"
            placeholder="Email"
            icon={profileIcon}
          />
          <Field
            type={PasswordInput}
            name="password"
            placeholder="Password"
            icon={lockIcon}
          />
          <Button
            type="submit"
            className="button"
            fluid
            big
          >
            Login
          </Button>
        </Form>
      </Layout>
    );
  }
}

import { connect } from 'react-redux';
import { createStructuredActions } from 'helpers/actions';
import { login } from 'modules/user/actions';

export default connect(
  undefined,
  createStructuredActions({ login })
)(Login);
