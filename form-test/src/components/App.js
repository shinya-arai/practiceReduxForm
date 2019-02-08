import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { submitName } from '../actions';

class App extends Component {
  renderInput({input}) {
    return (
      <div>
        <label>name</label>
        <input {...input} />
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.submitName(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="name" component={this.renderInput} />
      </form>
    );
  }
}

const formWrapped = reduxForm({
  form: "nameList"
})(App);

export default connect(null, { submitName })(formWrapped);