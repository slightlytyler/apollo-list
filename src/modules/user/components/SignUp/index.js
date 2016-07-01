import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import {
  Page,
  SmallContainer,
  Box,
  VerticalBox,
  Panel,
  Form,
  Field,
  Input,
  PasswordInput,
  Button,
} from 'react-portland-ui';
import yup from 'yup';

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

  renderForm = () => (
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
  );


  render() {
    return (
      <Page>
        <Box center fit>
          <SmallContainer marginBottom="10%">
            <VerticalBox className="auth" alignItems="center" fit>
              <header className="header">
                <section className="primary">Arrowsmith</section>
                <section className="secondary">Sign Up</section>
              </header>

              <Panel className="panel" fluid>
                {this.renderForm()}
              </Panel>

              <Link to="/login" className="alternate">
                Already have an account? <span className="bold">Login.</span>
              </Link>
            </VerticalBox>
          </SmallContainer>
        </Box>
      </Page>
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
