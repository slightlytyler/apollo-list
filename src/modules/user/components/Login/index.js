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
      <Page>
        <Box center fit>
          <SmallContainer marginBottom="10%">
            <VerticalBox className="auth" alignItems="center" fit>
              <header className="header">
                <section className="primary">Arrowsmith</section>
                <section className="secondary">Login</section>
              </header>

              <Panel fluid>
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
              </Panel>

              <Link to="/sign-up" className="alternate">
                Don't have an account? <span className="bold">Sign up.</span>
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
import { login } from 'modules/user/actions';

export default connect(
  undefined,
  createStructuredActions({ login })
)(Login);
