import React, { Component, PropTypes } from 'react';
import yup from 'yup';
import { Form, Field, Input, PasswordInput, Button } from 'react-portland-ui';
import Layout from '../Layout';

export class SignUp extends Component {
  static propTypes = {
    mutations: PropTypes.shape({
      signUp: PropTypes.func.isRequired,
    }),
    actions: PropTypes.shape({
      signUp: PropTypes.func.isRequired,
    }),
  };

  formSchema = yup.object({
    firstName: yup.string().required('is required'),
    lastName: yup.string().required('is required'),
    email: yup.string().required('is required'),
    password: yup.string().required('is required'),
  });

  handleSignUpFailure = errors => errors;

  handleSignUpSuccess = ({ signUp: { session } }) => this.props.actions.signUp({
    ...session.currentUser,
    sessionId: session.id,
  });

  handleValidSubmit = async user => {
    const { data, errors } = await this.props.mutations.signUp(user);
    console.log(data);
    if (errors) this.handleSignUpFailure(errors);
    else this.handleSignUpSuccess(data);
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
            name="firstName"
            label="First Name"
          />
          <Field
            type={Input}
            name="lastName"
            label="Last Name"
          />
          <Field
            type={Input}
            name="email"
            label="Email"
          />
          <Field
            type={PasswordInput}
            name="password"
            label="Password"
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
import { applyClientMutationId } from 'helpers/mutations';
import { createStructuredActions } from 'helpers/actions';
import { signUp } from 'modules/user/actions';

const mapMutationsToProps = () => ({
  signUp: user => ({
    mutation: gql`
      mutation SignUp($user: SignUpInput!) {
        signUp(input: $user) {
          session {
            id
            currentUser {
              id
              firstName
              lastName
            }
          }
        }
      }
    `,
    variables: { user: applyClientMutationId(user) },
  }),
});

const mapDispatchToProps = createStructuredActions({ signUp });

export default connect({
  mapMutationsToProps,
  mapDispatchToProps,
})(SignUp);
