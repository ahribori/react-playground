import React, { Component } from 'react';
import { Formik } from 'formik';

class FormikExample extends Component {

  handleSubmit = props => (e) => {
    console.log(props)

  };

  render() {
    return (
      <div>
        <Formik
          initialValues={{
            name: 'daniel'
          }}
          render={props => (
            <form action="">
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="name"
              />
              <button onClick={this.handleSubmit(props)} type="button">submit</button>
            </form>
          )}
        />
      </div>
    );
  }
}

export default FormikExample;
