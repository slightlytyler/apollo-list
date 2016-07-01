import React, { Component, PropTypes } from 'react';
import yup from 'yup';
import { Form, Field, Input, PasswordInput, Button } from 'react-portland-ui';
import Layout from '../Layout';

export class SignUp extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      signUp: PropTypes.func.isRequired,
    }),
  };

  formSchema = yup.object({
    name: yup.string().required('is required'),
    email: yup.string().required('is required'),
    password: yup.string().required('is required'),
  });

  handleValidSubmit = user => this.props.actions.signUp(user);

  render() {
    return (
      <Layout
        title="Sign Up"
        transitionTo="/login"
        altPrompt="Already have an account?"
        altCallToAction="Login."
      >
        <Form
          schema={this.formSchema}
          onSubmit={this.props.actions.signUp}
          fluid
        >
          <Field
            type={Input}
            name="name"
            label="Name"
            placeholder="Your name"
          />
          <Field
            type={Input}
            name="email"
            label="Email"
            placeholder="Email address"
          />
          <Field
            type={PasswordInput}
            name="password"
            label="Password"
            placeholder
          />
          <Button
            type="submit"
            className="button"
            fluid
            big
          >
            Sign Up
          </Button>
        </Form>
      </Layout>
    );
  }
}

import { connect } from 'react-redux';
import { createStructuredActions } from 'helpers/actions';
import { signUp } from 'modules/user/actions';

export default connect(
  undefined,
  createStructuredActions({ signUp })
)(SignUp);
