function getDepth(node) {
  if (!node.childNodes || node.childNodes.length === 0) {
    return 1;
  }
  const maxChildrenDepth = [...node.childNodes].map(v => getDepth(v));
  return 1 + Math.max(...maxChildrenDepth);
};

