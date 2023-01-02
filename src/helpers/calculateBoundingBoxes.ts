export type BoundingBoxes = { [key: string]: DOMRect };

const calculateBoundingBoxes = (container: HTMLDivElement) => {
  const boundingBox: BoundingBoxes = {};
  for (const child of [...container.children]) {
    const id = child.getAttribute("id")!;
    boundingBox[id] = child.getBoundingClientRect();
  }
  return boundingBox;
};

export default calculateBoundingBoxes;
