const clickHandler = () => {
  const number1 = parseInt(document.getElementById("text1").value, 10);
  document.write(`Sum upto n integers is: ${(number1 * (number1 + 1)) / 2}`);
  document.write(
    `Sum upto n integers is: ${
      (number1 * (number1 + 1) * (2 * number1 + 1)) / 6
    }`
  );
};
