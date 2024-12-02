declare module 'monaco-editor/esm/vs/editor/editor.worker' {
  export function initialize(callback: (ctx: Worker) => void): void;
  export class EditorWorker {
      constructor(ctx: Worker);
  }
}

declare module 'monaco-editor/esm/vs/language/typescript/ts.worker' {
  export function initialize(callback: (ctx: Worker) => void): void;
  export class TypeScriptWorker {
      constructor(ctx: Worker);
  }
}