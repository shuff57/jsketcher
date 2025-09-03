// Forward declarations to avoid circular dependencies

export interface IShell {
  faces: any[];
  data: any;
  vertices: any;
  edges: any;
  clone(): any;
  transform(tr: any): void;
  invert(shell: any): void;
  traverse(callback: (child: any) => any): void;
}

export interface IFace {
  surface: any;
  shell: IShell;
  outerLoop: any;
  innerLoops: any[];
  data: any;
  op: any;
}
