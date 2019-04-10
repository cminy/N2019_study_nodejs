//array
var members = ['choi', 'min', 'young'];
console.log(members); //[ 'choi', 'min', 'young' ]
console.log(members[0]); //choi

var i = 0;
while (i < members.length){
  console.log('array', members[i]);
  i = i + 1;
}
// array choi
// array min
// array young


//object
var category = {
  'firstname' : 'min',
  'middlename' : 'young',
  'lastname' : 'choi'
};
console.log(category); //{ firstname: 'min', middlename: 'young', lastname: 'choi' }
console.log(category.firstname); // min
console.log(category['firstname']); // min

for (var j in category){
  console.log('category name : ', j, '/ category value : ', category[j]);
}
// category name :  firstname / category value :  min
// category name :  middlename / category value :  young
// category name :  lastname / category value :  choi

function categoryall(){
  for (var j in category){
    console.log('category name : ', j, '/ category value : ', category[j]);
  }
}

categoryall();
