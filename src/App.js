import './App.css';
import React from 'react';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import Input from './components/Input';
import NewLifecycleExamples from './components/NewLifecycleExamples';
import { SampleProvider } from './contexts/SampleContext';

const App = () => {
    return (
        <SampleProvider>
            <div className="panes">
                <LeftPane />
                <RightPane />
            </div>
            <Input />
            <NewLifecycleExamples />
        </SampleProvider>
    );
};

export default App;