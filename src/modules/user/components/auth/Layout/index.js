import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Page, SmallContainer, Box, VerticalBox, Panel } from 'react-portland-ui';

const AuthLayout = ({ children, title, transitionTo, altPrompt, altCallToAction }) => (
  <Page>
    <Box center fit>
      <SmallContainer marginBottom="10%">
        <VerticalBox className="auth" alignItems="center" fit>
          <header className="header">
            <section className="primary">React Starter</section>
            <section className="secondary">{title}</section>
          </header>

          <Panel fluid>
            {children}
          </Panel>

          <Link to={transitionTo} className="alternate">
            {altPrompt} <span className="bold">{altCallToAction}</span>
          </Link>
        </VerticalBox>
      </SmallContainer>
    </Box>
  </Page>
);

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  transitionTo: PropTypes.string.isRequired,
  altPrompt: PropTypes.string.isRequired,
  altCallToAction: PropTypes.string.isRequired,
};

export default AuthLayout;
