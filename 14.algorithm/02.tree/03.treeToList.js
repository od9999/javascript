const tree = [
  {
    "id": 10,
    "name": "root",
    "parentId": null,
    "children": [
      {
        "id": 1,
        "name": "child1",
        "parentId": 10,
        "children": [
          {
            "id": 5,
            "name": "child1_2",
            "parentId": 1
          },
          {
            "id": 4,
            "name": "child1_1",
            "parentId": 1,
            "children": [
              {
                "id": 9,
                "name": "child1_1",
                "parentId": 4
              }
            ]
          }
        ]
      },
      {
        "id": 2,
        "name": "child2",
        "parentId": 10,
        "children": [
          {
            "id": 6,
            "name": "child2_1",
            "parentId": 2
          }
        ]
      },
      {
        "id": 3,
        "name": "child3",
        "parentId": 10,
        "children": [
          {
            "id": 7,
            "name": "child3_1",
            "parentId": 3
          }
        ]
      }
    ]
  }
];

function treeToList(rootNodes) {
  
}
console.log(JSON.stringify(treeToList(list), null, 2));