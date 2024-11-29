import 'monaco-editor/min/vs/editor/editor.main.css';
import * as monaco from 'monaco-editor';
import '../styles/styles.scss';

const winAny = window as any;
winAny.appSourceCode ??= {};
winAny.appSourceCode.activeMonacoEditor ??= activeMonacoEditor;

interface EditorOptions {
  value: string;
  language: string;
  automaticLayout: string;
  theme: string;
  lineNumbers: string;
  fontSize: string;
  readOnly: string;
}

function activeMonacoEditor({
  value,
  language,
  automaticLayout,
  theme,
  lineNumbers,
  fontSize,
  readOnly,
}: EditorOptions) {
  const container = document.getElementById('container');

  if (container) {
    monaco.editor.create(container, {
      value: value,
      language: language,
      theme: theme,
      automaticLayout: automaticLayout === 'True',
      fontSize: parseInt(fontSize, 10),
      lineNumbers: lineNumbers === 'True' ? 'on' : 'off',
      minimap: { enabled: true },
      scrollBeyondLastLine: false,
      roundedSelection: false,
      readOnly: readOnly === 'True',
      cursorStyle: 'line',
    });
  } else {
    console.error('Container element not found');
  }
}