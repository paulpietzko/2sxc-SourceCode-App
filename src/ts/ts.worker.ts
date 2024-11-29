import * as monaco from "monaco-editor";
import * as tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker";

self.onmessage = () => {
  tsWorker.initialize(
    (ctx: monaco.worker.IWorkerContext) => new tsWorker.TypeScriptWorker(ctx)
  );
};
