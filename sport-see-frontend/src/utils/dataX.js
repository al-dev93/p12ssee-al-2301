function dataX(xMax) {
  let index = 1;
  const data = [];
  while (index <= xMax) {
    data[data.length] = index;
    index += 1;
  }
  return data;
}

export default dataX;
