import { Mesh } from 'three';

export class SketchMesh extends Mesh {
  constructor(geometry, material) {
    super(geometry, material);
  }
}

export default SketchMesh;
