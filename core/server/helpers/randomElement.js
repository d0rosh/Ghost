module.exports = function randomElements(array, options) {
  // Shuffle array
  const shuffled = array.sort(() => Math.random() - 0.5);

  // Get sub-array of first n elements after shuffled
  const selected = shuffled.slice(0, 3);

  let result = '';

  selected.forEach(item => {
    result = result + options.fn(item);
  });

  return result;
};
