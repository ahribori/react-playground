import React, { Component } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';

class FormikExample extends Component {
  userInputHooks = next => e => {
    // Formik form 내부로 input event가 전파되기 전 처리

    next(e);
  };

  formLevelValidate = values => {
    const errors = {};
    console.log(values);
    const { name } = values;
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
          initialValues={{
            email: '',
            name: '',
            age: '',
            allAgree: false,
            agree1: false,
            agree2: false,
            agree3: false,
            color: 'red',
          }}
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
              <div>
                <label htmlFor="agree">모두 동의</label>
                <Field
                  type="checkbox"
                  name="allAgree"
                  checked={
                    props.values.agree1 &&
                    props.values.agree2 &&
                    props.values.agree3
                  }
                  onChange={() => {
                    const { values, setValues } = props;
                    const { agree1, agree2, agree3 } = values;
                    if (agree1 || agree2 || agree3) {
                      values.agree1 = false;
                      values.agree2 = false;
                      values.agree3 = false;
                    } else {
                      values.agree1 = true;
                      values.agree2 = true;
                      values.agree3 = true;
                    }
                    setValues(values);
                  }}
                />
              </div>
              <div>
                <label htmlFor="agree1">동의1</label>
                <Field
                  type="checkbox"
                  name="agree1"
                  checked={props.values.agree1}
                />
              </div>
              <div>
                <label htmlFor="agree2">동의2</label>
                <Field
                  type="checkbox"
                  name="agree2"
                  checked={props.values.agree2}
                />
              </div>
              <div>
                <label htmlFor="agree3">동의3</label>
                <Field
                  type="checkbox"
                  name="agree3"
                  checked={props.values.agree3}
                />
              </div>
              <div>
                <Field component="select" name="color">
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                </Field>
              </div>
              <div>
                <Field
                  type="radio"
                  name="color"
                  value='red'
                  id="radio_color_red"
                  checked={props.values.color === 'red'}
                />
                <label htmlFor="radio_color_red">red</label>
                <Field
                  type="radio"
                  name="color"
                  value='green'
                  id="radio_color_green"
                  checked={props.values.color === 'green'}
                />
                <label htmlFor="radio_color_green">green</label>
                <Field
                  type="radio"
                  name="color"
                  value='blue'
                  id="radio_color_blue"
                  checked={props.values.color === 'blue'}
                />
                <label htmlFor="radio_color_blue">blue</label>
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
