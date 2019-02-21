import React, { Component } from 'react';

const styles = {
  container: {
    border: '1px solid red',
    display: 'flex',
  },
  leftContainer: {
    flex: '1 1 50%',
    padding: 16,
    borderRight: '1px dashed gray',
  },
  rightContainer: {
    flex: '1 1 50%',
    padding: 16,
  },
  regexInput: {
    display: 'block',
    width: '100%',
    marginBottom: 10,
  },
  textInput: {
    display: 'block',
    width: '100%',
  },
  viewer: {
    whiteSpace: 'pre-wrap',
  },
};

class RegExViewer extends Component {
  state = {
    regex: '',
    text: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { regex, text } = this.state;

    let result = [];

    try {
      const regExp = new RegExp(regex, 'gi');
      result = regExp.exec(text);
    } catch (e) {}
    
    console.log(result)

    return (
      <div style={styles.container}>
        <div style={styles.leftContainer}>
          <label htmlFor="regex">정규식</label>
          <input
            type="text"
            id="regex"
            name="regex"
            style={styles.regexInput}
            onChange={this.handleChange}
          />
          <label htmlFor="text">문자열</label>
          <textarea
            id="text"
            name="text"
            style={styles.textInput}
            rows={25}
            onChange={this.handleChange}
          />
        </div>
        <div style={styles.rightContainer}>
          <div style={styles.viewer}>{text}</div>
        </div>
      </div>
    );
  }
}

export default RegExViewer;
