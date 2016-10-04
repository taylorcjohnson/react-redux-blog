import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

const FIELDS = {
  title: {
    type: 'input',
    label: 'Title'
  },
  categories: {
    type: 'input',
    label: 'Post categories'
  },
  content: {
    type: 'textarea',
    label: 'Content'
  }
};

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // createPost returns a promise, if/when it is resolved that means the post was successfully made
        // now, navigate user back to index
        this.context.router.push("/");
      });
  }

  renderField(fieldConfig, field) {
    const fieldHelper = this.props.fields[field];
    
    return (
      <div key={fieldConfig.label} className={ `form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}` }>
        <label>{fieldConfig.label}</label>
        <fieldConfig.type type="text" className="form-control" {...fieldHelper} />
        <div className="text-help form-control-feedback">
          {fieldHelper.touched ? fieldHelper.error : ''}
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>
        {_.map(FIELDS, this.renderField.bind(this))}
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, (type, field) => {
    if(!values[field]) {
      errors[field] = `Enter ${field}`;
    }
  });

//   if(!values.title) {
//     errors.title = 'Please enter a post title';
//   }
//
//   if(!values.categories) {
//     errors.categories = 'Please enter one or more post categories';
//   }
//
//   if(!values.content) {
//     errors.content = 'Please complete the post content';
//   }
//

   return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: _.keys(FIELDS),
  validate
}, null, { createPost })(PostsNew);
