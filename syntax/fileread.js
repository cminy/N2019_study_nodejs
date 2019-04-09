var fs = require('fs');
fs.readFile('syntax/sample.txt', 'utf-8', function(err, data){
  console.log(data);
});

/*
readFile이라는 기능을 이용해서 syntax/sample.txt좀 읽어와
읽어오는데 시간 좀 있을테고
다 읽었으면 function(에러일떄,에러안났을떄) 실행해라
*/
