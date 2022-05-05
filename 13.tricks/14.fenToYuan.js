const fenToYuan = (fen, fallback = '--') => {
  try {
    const result = (Number(fen) / 100)
      .toLocaleString('en-US')
      .replace(/\.(\d)$/, '.$10')
      .replace(/$/, '.00')
      .replace(/\.(\d{2}).*/, '.$1');
    return result;
  } catch (error) {
    return fallback;
  }
};
const fenToYuan2 = (fen, fallback = '--') => {
  try {
    const result = (Number(fen) / 100)
      .toLocaleString('en-US')
      .replace(/\.(\d)$/, '.$10')
      .replace(/$/, '.00')
      .replace(/\.(\d{2}).*/, '.$1');
    return result;
  } catch (error) {
    return fallback;
  }
};

console.log(fenToYuan(12350)); // 123.50
console.log(fenToYuan2(12350)); // 123.50