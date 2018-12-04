import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .email('올바른 이메일 형식이 아닙니다.')
    .required('이메일을 입력하세요.'),
  name: Yup.string()
    .min(2, '이름은 2~10 글자 사이로 입력하세요.')
    .max(10, '이름은 2~10 글자 사이로 입력하세요.')
    .required('이름을 입력하세요.'),
  age: Yup.number()
    .required('나이를 입력하세요.')
    .typeError('왜 숫자가 아니야~')
    .positive()
    .integer('왜 숫자가 아니냐;'),
});

const validate = values => {
  const errors = {};
  const { email, name, age } = values;
  if (name.length > 10) {
    errors.name = '열 자 이상 입력 불가'
  }
  console.log(errors)
  return errors;
};

class FormikExample extends Component {

  handleSubmit = props => (e) => {
    console.log(props);
    console.log(props.errors);
  };

  validate = (values) => {
    console.log(values)
    const errors = {};
    if (values.name.length > 10) {
      errors.name = '이름이 10자가 넘어요!';
    }
    return errors;
  };

  render() {
    return (
      <div>
        <Formik
          initialValues={{
            email: '',
            name: '',
            age: '',
          }}
          validationSchema={FormSchema}
          validate={validate}
          render={props => (
            <form action="">
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.email}
                name="email"
              />
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="name"
              />
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.age}
                name="age"
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
