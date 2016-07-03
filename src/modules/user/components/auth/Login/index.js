import React, { Component, PropTypes } from 'react';
import yup from 'yup';
import { Form, Field, Input, PasswordInput, Button } from 'react-portland-ui';
import Layout from '../Layout';
import profileIcon from 'icons/profile.svg';
import lockIcon from 'icons/lock.svg';

export class Login extends Component {
  static propTypes = {
    mutations: PropTypes.shape({
      login: PropTypes.func.isRequired,
    }),
    actions: PropTypes.shape({
      login: PropTypes.func.isRequired,
    }),
  };

  formSchema = yup.object({
    email: yup.string().required('is required'),
    password: yup.string().required('is required'),
  });

  handleLoginFailure = errors => errors;

  handleLoginSuccess = ({ signIn: { session } }) => this.props.actions.login({
    ...session.currentUser,
    sessionId: session.id,
  });

  handleValidSubmit = async credentials => {
    const { data, errors } = await this.props.mutations.login(credentials);

    if (errors) this.handleLoginFailure(errors);
    else this.handleLoginSuccess(data);
  };

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
          onSubmit={this.handleValidSubmit}
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

import { connect } from 'react-apollo';
import gql from 'graphql-tag';
import { applyClientMutationId } from 'helpers/mutations';
import { createStructuredActions } from 'helpers/actions';
import { login } from 'modules/user/actions';

const mapMutationsToProps = () => ({
  login: credentials => ({
    mutation: gql`
      mutation Login($credentials: SignInInput!) {
        signIn(input: $credentials) {
          session {
            id
            currentUser {
              id
              fullName
            }
          }
        }
      }
    `,
    variables: { credentials: applyClientMutationId(credentials) },
  }),
});

const mapDispatchToProps = createStructuredActions({ login });

export default connect({
  mapMutationsToProps,
  mapDispatchToProps,
})(Login);
