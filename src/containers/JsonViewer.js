import React from 'react';
import ReactJson from 'react-json-view';

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
      <ReactJson
        src={json}
        indentWidth={2}
        displayDataTypes={false}
        theme={'monokai'}
      />
    </div>
  );
};

export default JsonViewer;
