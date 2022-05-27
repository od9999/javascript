function treeToList(tree, parentId) {
  const res = [];
  for (const item of tree) {
    const { children, ...i } = item;
    if (children?.length) {
      res.push(...treeToList(children, i.id));
    }
    res.push({
      ...i,
      parentId,
    });
  }
  return res;
}

const tree = [
  {
    "id": 10,
    "children": [
      {
        "id": 1,
        "children": [
          {
            "id": 5,
          },
          {
            "id": 4,
            "children": [
              {
                "id": 9,
              }
            ]
          }
        ]
      },
      {
        "id": 2,
        "children": [
          {
            "id": 6,
          }
        ]
      },
      {
        "id": 3,
        "children": [
          {
            "id": 7,
          }
        ]
      }
    ]
  }
];

console.log(JSON.stringify(treeToList(tree), null, 2));