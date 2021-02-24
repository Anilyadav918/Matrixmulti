const multiplyMatrices = (m1, m2) => {
  let result = [];
  for (let i = 0; i < m1.length; i++) {
    result[i] = [];
    for (let j = 0; j < m2[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < m1[0].length; k++) {
        sum += m1[i][k] * m2[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
};

const X = [
  [1, 7, 3],
  [3, 5, 6],
  [6, 8, 9],
];
const Y = [
  [1, 1, 1, 2],
  [6, 7, 3, 0],
  [4, 5, 9, 1],
];

const result = multiplyMatrices(X, Y);

console.log(result);
