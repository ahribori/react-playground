import React from 'react';
import ReactJson from 'react-json-view';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

const JsonViewer = () => {
  const json = {
    glossary: {
      title: 'example glossary',
      GlossDiv: {
        title: 'S',
        GlossList: {
          GlossEntry: {
            ID: 'SGML',
            SortAs: 'SGML',
            GlossTerm: 'Standard Generalized Markup Language',
            Acronym: 'SGML',
            Abbrev: 'ISO 8879:1986',
            GlossDef: {
              para:
                'A meta-markup language, used to create markup languages such as DocBook.',
              GlossSeeAlso: ['GML', 'XML'],
            },
            GlossSee: 'markup',
          },
        },
      },
    },
  };

  return (
    <div>
      <ResizableBox
        className="box"
        width={200}
        height={200}
        draggableOpts={{ grid: [25, 25] }}
        style={{
          paddingBottom: 24,
        }}
      >
        <div
          style={{
            overflowY: 'scroll',
            margin: 20,
            height: '100%',
            border: '1px solid grey',
            padding: 8,
          }}
        >
          <ReactJson
            src={json}
            indentWidth={2}
            displayDataTypes={false}
            style={{ fontSize: 11 }}
          />
        </div>
      </ResizableBox>
    </div>
  );
};

export default JsonViewer;
