import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor-contents.min.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'highlight.js/styles/github.css';
import React from 'react';
import Editor from 'tui-editor';

class TUIEditor extends React.Component {

    componentDidMount() {
        new Editor({
            el: document.getElementById('editor'),
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            width: '100%',
        });
    }

    render() {
        return (
            <div id="editor"/>
        );
    }
}

export default TUIEditor;
