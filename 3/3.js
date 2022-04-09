var arr = [];
let i = 0;
arr.push(prompt("Enter a number"));
console.log(arr);
while (arr[i] !== "") {
  arr.push(prompt("Enter a number ,just enter ok to pause"));
  i += 1;
  console.log(arr);
}
arr.pop();
console.log(arr);
document.write(`Numbers entered: ${arr}` + "<br/>");
document.write(`Total Numbers entered: ${arr.length}` + "<br/>");
document.write("Minimum is:" + Math.min.apply(Math, arr) + "<br/>");
document.write("Maximum is:" + Math.max.apply(Math, arr));
