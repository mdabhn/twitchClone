import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Create extends Component {
  renderInputs({ input, label, meta }) {
    return (
      <div className='field'>
        <label htmlFor={label}>{label}</label>
        <input {...input} autoComplete='off' />
        {meta.touched ? <div style={{ color: 'red' }}>{meta.error}</div> : null}
      </div>
    );
  }

  onSubmit(e) {
    console.log(e);
  }

  render() {
    return (
      <form
        className='ui form'
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name='title' component={this.renderInputs} label='Title' />
        <Field
          name='description'
          component={this.renderInputs}
          label='Description'
        />

        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

const validate = (value) => {
  const errors = {};

  if (!value.title) errors.title = 'Required';
  if (!value.description) errors.description = 'Required';

  return errors;
};

export default reduxForm({
  form: 'createNewStream',
  validate,
})(Create);
