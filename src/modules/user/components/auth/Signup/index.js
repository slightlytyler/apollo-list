import React, { Component, PropTypes } from 'react';
import yup from 'yup';
import { Form, Field, Input, PasswordInput, Button } from 'react-portland-ui';
import Layout from '../Layout';

export class SignUp extends Component {
  static propTypes = {
    mutations: PropTypes.shape({
      signUp: PropTypes.func.isRequired,
      login: PropTypes.func.isRequired,
    }),
    actions: PropTypes.shape({
      login: PropTypes.func.isRequired,
    }),
  };

  formSchema = yup.object({
    username: yup.string().required('is required'),
    password: yup.string().required('is required'),
  });

  handleLoginFailure = errors => errors;

  handleLoginSuccess = ({ loginUser }, { username }) => this.props.actions.login({
    ...loginUser,
    username,
  });

  handleSignUpFailure = errors => errors;

  handleSignUpSuccess = async ({ username, password }) => {
    const credentials = { username, password };
    const { data, errors } = await this.props.mutations.login(credentials);

    if (errors) this.handleLoginFailure(errors);
    else this.handleLoginSuccess(data, credentials);
  };

  handleValidSubmit = async user => {
    const { errors } = await this.props.mutations.signUp(user);

    if (errors) this.handleSignUpFailure(errors);
    else this.handleSignUpSuccess(user);
  };

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
          onSubmit={this.handleValidSubmit}
          fluid
        >
          <Field
            type={Input}
            name="username"
            label="Username"
            placeholder="Your username"
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

import { connect } from 'react-apollo';
import gql from 'graphql-tag';
import { createStructuredActions } from 'helpers/actions';
import { login } from 'modules/user/actions';

const mapMutationsToProps = () => ({
  signUp: user => ({
    mutation: gql`
      mutation SignUp($user: _CreateUserInput!) {
        createUser(input: $user) {
          changedUser {
            id
          }
        }
      }
    `,
    variables: { user },
  }),
  login: credentials => ({
    mutation: gql`
      mutation Login($credentials: _LoginUserInput!) {
        loginUser(input: $credentials) {
          id
          token
        }
      }
    `,
    variables: { credentials },
  }),
});

const mapDispatchToProps = createStructuredActions({ login });

export default connect({
  mapMutationsToProps,
  mapDispatchToProps,
})(SignUp);
