//flow control statement


//conditional statement
console.log('A');
console.log('B');
if (true){
  console.log('C1');
} else {
  console.log('C2');
}
console.log('D');

var args = process.argv;
console.log(args);
console.log(args[1]);

if(args[1] === '1'){
  console.log('C1');
}else{
  console.log('False');
}
