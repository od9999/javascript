const list = [
  {
    id: 7,
    replyId: 0,
  },
  {
    id: 8,
    replyId: 0,
  },
  {
    id: 9,
    replyId: 0,
  },
  {
    id: 1,
    replyId: 0,
  },
  {
    id: 2,
    replyId: 1,
  },
  {
    id: 3,
    replyId: 2,
  },
  {
    id: 4,
    replyId: 2,
  },
  {
    id: 5,
    replyId: 1,
  },
  {
    id: 6,
    replyId: 7,
  },
  {
    id: 10,
    replyId: 2,
  },
];

const getTop3 = (list) => {
  const map = {

  };
  let first = {
    count: 0,
  };
  let second = {
    count: 0,
  };;
  let third = {
    count: 0,
  };;
  list.forEach(comment => {
    if (comment.replyId) {
      if (map[comment.replyId]) {
        map[comment.replyId].count++;
        if (map[comment.replyId].count > first.count) {
          first = map[comment.replyId];
        } else if (map[comment.replyId].count > second.count) {
          second = map[comment.replyId];
        } else if (map[comment.replyId].count > third.count) {
          third = map[comment.replyId];
        }
      } else {
        map[comment.replyId] = {
          count: 1,
          ref: comment
        };
      }
    }
  });
  console.log(map);
  console.log(first, second, third);
};
getTop3(list);