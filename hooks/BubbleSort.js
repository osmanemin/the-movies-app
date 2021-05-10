export const BubbleSort = (array) => {
  let tmp;

  if (array === undefined) return [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length - i; j++) {
      if (array[j - 1].vote_average < array[j].vote_average) {
        tmp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = tmp;
      }
    }
  }
  return [...array]
};

export default BubbleSort;
