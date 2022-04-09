const clickHandler = () => {
  const number1 = parseInt(document.getElementById("text1").value, 10);
  const number2 = parseInt(document.getElementById("text2").value, 10);
  document.body.appendChild(document.createElement("h1"));
  document.querySelector("body h1:last-child").id = "sum";
  document.querySelector("#sum").innerHTML = `SUM IS: ${number1 + number2} `;

  document.body.appendChild(document.createElement("p"));
  document.querySelector("body p:last-child").id = "product";
  document.querySelector("#product").innerHTML = `Product IS: ${
    number1 * number2
  } `;
  document.body.appendChild(document.createElement("p"));
  document.querySelector("body p:last-child").id = "power";
  document.querySelector("#power").innerHTML = ` Power IS: ${Math.pow(
    number1,
    number2
  )} `;

  // document.write(
  //   // document.write('<p id="jstext">' + number + '</p>')
  //   " <h1 id ='sum'>" + `Sum is ${number1 + number2}` + "</h1>"
  // );
  // document.write(`Product is ${number1 * number2}`);
  // document.write(` ${number1} ^ ${number2} is ${Math.pow(number1, number2)}`);
};
