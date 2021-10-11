const list = [
  { id: 1, name: 'child1', parentId: 10 },
  { id: 2, name: 'child2', parentId: 10 },
  { id: 6, name: 'child2_1', parentId: 2 },
  { id: 10, name: 'root', parentId: null },
  { id: 5, name: 'child1_2', parentId: 1 },
  { id: 4, name: 'child1_1', parentId: 1 },
  { id: 9, name: 'child1_1', parentId: 4 },
  { id: 3, name: 'child3', parentId: 10 },
  { id: 7, name: 'child3_1', parentId: 3 },
];

function listToTree(list) {
  const res = [];
  const map = list.reduce((res, v) => {
    res[v.id] = v;
    return res;
  }, {});
  for (const item of list) {
    // 根节点
    if (item.parentId === null) {
      res.push(item);
      continue;
    }
    // 非根节点
    if (map[item.parentId]) {
      const parent = map[item.parentId];
      parent.children = parent.children || [];
      parent.children.push(item);
    }
  }
  return res;
}

console.log(JSON.stringify(listToTree(list), null, 2));