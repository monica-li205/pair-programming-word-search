const transpose = function(matrix) {
  const output = [];
  let size1 = matrix.length;
  let size2 = matrix[0].length;

  for (let i = 0; i < size2; i++) {
    const internalArray = [];

    for (let j = 0; j < size1; j++) {
      internalArray.push(matrix[j][i]);
    
    }
    output.push(internalArray);
  }

  return output;
};
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n');
  }
};
module.exports = transpose;