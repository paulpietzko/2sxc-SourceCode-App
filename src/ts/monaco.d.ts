declare module 'monaco-editor/esm/vs/editor/editor.worker' {
  export function initialize(callback: (ctx: any) => any): void;
  export class EditorWorker {
      constructor(ctx: any);
  }
}

declare module 'monaco-editor/esm/vs/language/typescript/ts.worker' {
  export function initialize(callback: (ctx: any) => any): void;
  export class TypeScriptWorker {
      constructor(ctx: any);
  }
}