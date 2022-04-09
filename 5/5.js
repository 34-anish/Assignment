const clickHandler = () => {
  const string = document.getElementById("text1").value.toUpperCase();

  // find the length of a string
  const len = string.length;
  let flag = 1;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check if first and last string are same
    if (string[i] !== string[len - 1 - i]) {
      flag = 0;
    }
  }
  if (flag === 0) {
    document.write("It is not a palindrome");
  } else {
    document.write("It is a palindrome");
  }
};
