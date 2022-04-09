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
document.write(arr.length);
document.write(Math.min.apply(Math, arr));
document.write(Math.max.apply(Math, arr));
