import { visit } from "unist-util-visit";

const remarkUnwrapImages = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (tree: any) => {
    visit(tree, "paragraph", (node, index, parent) => {
      if (!parent || !node.children) return;

      const children = node.children;
      const onlyChild = children.length === 1 ? children[0] : null;

      const isImage =
        onlyChild &&
        (onlyChild.type === "image" ||
          (onlyChild.type === "link" &&
            onlyChild.children.length === 1 &&
            onlyChild.children[0].type === "image"));

      if (isImage && parent.children && typeof index === "number") {
        parent.children[index] = onlyChild;
      }
    });
  };
};

export default remarkUnwrapImages;
