import React, { Component, PropTypes } from 'react';
import yup from 'yup';
import { SmallContainer, Panel, Form, Field, Input, Button } from 'react-portland-ui';

export default class PostsForm extends Component {
  static propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
  };

  formSchema = yup.object({
    title: yup.string().required('is required'),
    text: yup.string().required('is required'),
  });

  render() {
    return (
      <SmallContainer className="posts__form">
        <Panel fluid>
          <Form
            schema={this.formSchema}
            onSubmit={this.props.onSubmit}
            fluid
          >
            <Field
              type={Input}
              defaultValue={this.props.title}
              name="title"
              label="Title"
            />
            <Field
              type={Input}
              defaultValue={this.props.text}
              name="text"
              label="Text"
            />
            <Button
              type="submit"
              className="button"
              fluid
              big
            >
              Submit
            </Button>
          </Form>
        </Panel>
      </SmallContainer>
    );
  }
}
