function print(n) {
  for (var i = 0; i < n; i++) {
    // setTimeout(console.log, 1000, i);
    setTimeout((data) => {
      console.log(data);
    }, 1000, i);
  }
}
print(10);