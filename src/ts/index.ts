import loader from '@monaco-editor/loader';

interface MonacoEditorOptions {
  value: string;
  language: string;
  automaticLayout: boolean;
  theme: string;
  lineNumbers: 'on' | 'off';
  fontSize: number;
  readOnly: boolean;
  minimap: boolean;
}

const winAny = window as any;
winAny.appSourceCode ??= {};

winAny.appSourceCode.initializeMonacoEditor = function (editorOptions: MonacoEditorOptions) {
loader.init().then(monaco => {
  const {
    value,
    language,
    automaticLayout,
    theme,
    lineNumbers,
    fontSize,
    readOnly,
    minimap,
  } = editorOptions;

  const container = document.getElementById('container');

  if (container) {
    monaco.editor.create(container, {
      value: value,
      language: language,
      theme: theme,
      automaticLayout: automaticLayout,
      fontSize: fontSize,
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
});}