function a(){
  console.log('A');
}

var b = function(){
  console.log('B');
};

b();
a();

function slowfunc(callback){
  callback();
}

slowfunc(b);
slowfunc(a);
