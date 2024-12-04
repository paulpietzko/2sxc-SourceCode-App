import type * as Monaco from 'monaco-editor';
import 'requirejs';

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

winAny.require.config({ 
  paths: { 
    vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.52.0/min/vs',
  }
});

winAny.require(['vs/editor/editor.main'], function (monaco: typeof Monaco) {
  winAny.appSourceCode.activeMonacoEditor = function({
    value,
    language,
    automaticLayout,
    theme,
    lineNumbers,
    fontSize,
    readOnly,
    minimap,
  }: MonacoEditorOptions) {
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
  }
});
