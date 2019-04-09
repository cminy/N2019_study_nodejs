console.log(Math.round(1.6)); //내장함수. math꼭 대문자 써줘야.
console.log(Math.round(1.4));

function sum(first, second){ //parameter
  console.log(first+second);
}

//argument
sum(2,4);
sum('a','b');
sum('2','4');



function sum2(first, second){ //parameter
  console.log('A');
  return first+second; //return : 여기서 함수가 끝나고 이걸 반환한다.
//  console.log('B'); //그래서 이거는 안나옴.
}
console.log(sum2(2,4));
