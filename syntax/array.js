var arr1 = [1, 2, 3, 4];
console.log(arr1[0]);
console.log(arr1[0]===1); //true 숫자라는것.
console.log(arr1[0]==='1'); // false

var arr2 = ['A','B','C','D'];
var j = 0;
console.log(arr2);
console.log(arr2.length);
while (j < arr2.length){
  console.log(arr2[j]);
  j = j + 1;
}
arr2.push('E');
console.log(arr2);
console.log(arr2.length);

var total = 0;
var i = 0;
while(i < arr1.length){
  total = total + arr1[i];
  i = i + 1;
}
console.log(`total : ${total}`);
