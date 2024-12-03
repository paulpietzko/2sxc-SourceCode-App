// import 'monaco-editor/min/vs/editor/editor.main.css';
import * as monaco from "monaco-editor";

const winAny = window as any;
winAny.appSourceCode ??= {};
winAny.appSourceCode.activeMonacoEditor ??= activeMonacoEditor;

// @ts-ignore
self.MonacoEnvironment = {
	getWorkerUrl: function (moduleId, label) {
		if (label === 'json') {
			return './json.worker.bundle.js';
		}
		if (label === 'css' || label === 'scss' || label === 'less') {
			return './css.worker.bundle.js';
		}
		if (label === 'html' || label === 'handlebars' || label === 'razor') {
			return './html.worker.bundle.js';
		}
		if (label === 'typescript' || label === 'javascript') {
			return './ts.worker.bundle.js';
		}
		return './editor.worker.bundle.js';
	}
};

interface MonacoEditorOptions {
  value: string;
  language: string;
  automaticLayout: boolean;
  theme: string;
  lineNumbers: "on" | "off";
  fontSize: number;
  readOnly: boolean;
  minimap: boolean;
}

function activeMonacoEditor({
  value,
  language,
  automaticLayout,
  theme,
  lineNumbers,
  fontSize,
  readOnly,
  minimap,
}: MonacoEditorOptions) {
  const container = document.getElementById("container");

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
      cursorStyle: "line",
    });
  } else {
    console.error("Container element not found");
  }
}
