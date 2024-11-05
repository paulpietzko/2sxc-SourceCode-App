import * as monaco from 'monaco-editor/esm/vs/editor/editor.worker';

self.onmessage = () => {
  monaco.initialize((ctx) => new monaco.EditorWorker(ctx));
};