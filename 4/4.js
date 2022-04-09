let array = [0, 0, 1];
const clickHandler = () => {
  i = 0;
  for (let j = 3; j < 30; j++) {
    array[j] = array[i] + array[i + 1] + array[i + 2];
    i++;
  }
  document.write(array);
};
