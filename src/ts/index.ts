// import 'monaco-editor/min/vs/editor/editor.main.css';
import * as monaco from 'monaco-editor';

const winAny = window as any;
winAny.appSourceCode ??= {};
winAny.appSourceCode.activeMonacoEditor ??= activeMonacoEditor;

function activeMonacoEditor({
  value,
  language,
  automaticLayout,
  theme,
  lineNumbers,
  fontSize,
  readOnly,
  minimap,
}: any) {
  const container = document.getElementById('container');
  
  if (container) {
    monaco.editor.create(container, {
      value: value,
      language: language,
      theme: theme,
      automaticLayout: automaticLayout,
      fontSize: parseInt(fontSize, 10),
      lineNumbers: lineNumbers,
      minimap: { enabled: minimap },
      scrollBeyondLastLine: false,
      roundedSelection: false,
      readOnly: readOnly,
      cursorStyle: 'line',
    });
  } else {
    console.error('Container element not found');
  }
}
