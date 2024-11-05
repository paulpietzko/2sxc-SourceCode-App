import 'monaco-editor/min/vs/editor/editor.main.css';
import * as monaco from 'monaco-editor';
import "../styles/styles.scss";

const winAny = (window as any);
winAny.appSourceCode ??= {};
winAny.appSourceCode.activeMonacoEditor ??= activeMonacoEditor;

function activeMonacoEditor({value, language, automaticLayout, theme, lineNumbers, fontSize, readOnly } : any) {
  window.MonacoEnvironment = {
    getWorkerUrl: function (_moduleId: any, label: string) {
      if (label === "typescript" || label === "javascript") {
        return "ts.worker.js";
      }
      return "editor.worker.js";
    },
  };
  
  const container = document.getElementById("container");

  if (container) {
    const editor = monaco.editor.create(container, {
      value: value,
      language: language,
      theme: theme,
      automaticLayout: automaticLayout == "True",
      fontSize: fontSize,
      lineNumbers: "on",
      minimap: { enabled: true },
      scrollBeyondLastLine: false,
      roundedSelection: false,
      readOnly: readOnly == "True",
      cursorStyle: "line",
    });

  } else {
    console.error("Container element not found");
  }
  
}
