import React from 'react';

import ReactSimpleCodeEditor from 'react-simple-code-editor';
import highlight from './highlight';

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import './prism.css';


interface CustomSimpleEditorProps {
  value?: string;
  onValueChange: (value: string) => void;
}

export const CustomSimpleEditor = (props: CustomSimpleEditorProps) => (
  <ReactSimpleCodeEditor
    value={props.value || ''}
    onValueChange={props.onValueChange}
    highlight={highlight}
    padding={10}
    style={{
      fontFamily: '"Fira code", "Fira Mono", monospace',
      fontSize: 12,
      color: 'white',
      width: '100%',
      minHeight: '100%',
    }}
  />
);

export default CustomSimpleEditor;
