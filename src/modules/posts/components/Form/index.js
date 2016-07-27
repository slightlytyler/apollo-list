import React, { Component, PropTypes } from 'react';
import { map } from 'lodash/fp';
import yup from 'yup';
import {
  SmallContainer,
  Form,
  Field,
  Input,
  Select,
  Button,
} from 'react-portland-ui';
import BasicLayout from 'layouts/Basic';

export default class PostsForm extends Component {
  static propTypes = {
    post: PropTypes.shape({
      title: PropTypes.string,
      text: PropTypes.string,

    }),
    lists: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })),
    categories: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })),
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  getOptions = map(record => ({
    label: record.name,
    value: record.id,
  }));

  formSchema = yup.object({
    title: yup.string().required('is required'),
    text: yup.string().required('is required'),
    listId: yup.string().required('is required'),
    categoryId: yup.string().required('is required'),
  });

  render() {
    return (
      <BasicLayout>
        <SmallContainer className="posts__form">
          <Form
            schema={this.formSchema}
            defaultValue={this.props.post}
            onChange={this.props.onChange}
            onSubmit={this.props.onSubmit}
            fluid
          >
            <Field
              type={Input}
              name="title"
              label="Title"
            />
            <Field
              type={Input}
              name="text"
              label="Text"
            />
            <Field
              type={Select}
              name="listId"
              label="List"
              options={this.getOptions(this.props.lists)}
              placeholder="List"
            />
            <Field
              type={Select}
              name="categoryId"
              label="Category"
              options={this.getOptions(this.props.categories)}
              placeholder="Category"
              disabled={!this.props.categories}
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
        </SmallContainer>
      </BasicLayout>
    );
  }
}
