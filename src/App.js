import './App.css';
import React from 'react';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import Input from './components/Input';
import NewLifecycleExamples from './components/NewLifecycleExamples';
import { SampleProvider } from './contexts/SampleContext';
import MyStyledComponent from './components/MyStyledComponent';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
        }
    }

    handleChange = e => {
        this.setState({
            message: e.target.value,
        })
    }

    render() {
        return (
            <SampleProvider>
                <div className="panes">
                    <LeftPane />
                    <RightPane />
                </div>
                <Input />
                <NewLifecycleExamples message={this.state.message} text={"hi"}/>
                <input type="text" onChange={this.handleChange}/>
                <MyStyledComponent />
            </SampleProvider>
        );
    }
}

export default App;