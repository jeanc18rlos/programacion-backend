(() => {
  const hashMap = {};
  for (let index = 0; index < 1000; index++) {
    const number = Math.floor(Math.random() * (20 - 0) + 0);
    if (hashMap[number]) {
      hashMap[number]++;
    } else {
      hashMap[number] = 1;
    }
  }
})();
