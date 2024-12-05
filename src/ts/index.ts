import type * as Monaco from 'monaco-editor';

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
  // Load require.min.js dynamically
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js';

  script.onload = () => {
    // Assign the require function to a private variable
    const privateRequire = winAny.require;

    // Configure the privateRequire paths
    privateRequire.config({
      paths: {
        vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.0/min/vs',
      },
    });

    // Use privateRequire to load the Monaco editor
    privateRequire(['vs/editor/editor.main'], function (monaco: typeof Monaco) {
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
    });
  };
  script.onerror = () => {
    console.error('Failed to load require.min.js');
  };
  document.head.appendChild(script);
};