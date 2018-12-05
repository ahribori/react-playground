import React, { Component } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';

class FormikExample extends Component {
  userInputHooks = next => e => {
    const { name, value } = e.target;

    // Formik form 내부로 input event가 전파되기 전 처리

    next(e);
  };

  formLevelValidate = values => {
    const errors = {};
    console.log(values);
    const { email, name, age } = values;
    if (name.length > 10) {
      errors.name = '열 자 이상 입력 불가';
    }
    if (
      !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/gi.test(
        values.email,
      )
    ) {
      errors.email = '올바른 이메일 형식이 아닙니다.';
    }
    return errors;
  };

  validateEmail = value => {
    let error;
    if (
      !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/gi.test(
        value,
      )
    ) {
      error = '올바른 이메일 형식이 아닙니다.';
    }
    console.log(error);
    return error;
  };

  validateName = value => {
    let error;
    if (value.length > 10) {
      error = '이름이 10자가 넘습니다.';
    }
    console.log(error);
    return error;
  };

  validateAge = value => {
    console.log('validateAge');
    let error;
    if (!/\^\d+$/.test(value)) {
      error = '숫자가 아닙니다.';
    }
    return error;
  };

  handleSubmit = props => e => {
    const { errors } = props;
    Object.keys(errors).forEach(fieldName => {
      console.error(`[${fieldName}] ${errors[fieldName]}`);
    });
  };

  render() {
    return (
      <div>
        <Formik
          initialValues={{ email: '', name: '', age: '' }}
          validate={this.formLevelValidate}
          render={props => (
            <form action="">
              <div>
                <label htmlFor="email">이메일</label>
                <Field
                  type="text"
                  onChange={this.userInputHooks(props.handleChange)}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                  name="email"
                  validate={this.validateEmail}
                />
                <ErrorMessage name="email" />
              </div>
              <div>
                <label htmlFor="name">이름</label>
                <Field
                  type="text"
                  onChange={this.userInputHooks(props.handleChange)}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  name="name"
                  validate={this.validateName}
                />
                <ErrorMessage name="name" />
              </div>
              <div>
                <label htmlFor="age">나이</label>
                <Field
                  type="text"
                  onChange={this.userInputHooks(props.handleChange)}
                  onBlur={props.handleBlur}
                  value={props.values.age}
                  name="age"
                  validate={this.validateAge}
                />
                <ErrorMessage name="age" />
              </div>
              <button onClick={this.handleSubmit(props)} type="button">
                submit
              </button>
            </form>
          )}
        />
      </div>
    );
  }
}

export default FormikExample;
