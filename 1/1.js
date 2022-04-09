const clickHandler = () => {
  const number1 = parseInt(document.getElementById("text1").value, 10);
  const number2 = parseInt(document.getElementById("text2").value, 10);
  //   const result = document.querySelector("#result");
  //   result.append(`<h1>Good</h1>`);

  document.write(`Sum is ${number1 + number2}`);
  document.write(`Product is ${number1 * number2}`);
  document.write(` ${number1} ^ ${number2} is ${Math.pow(number1, number2)}`);
};
