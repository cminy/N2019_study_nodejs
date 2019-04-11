var path = require('path');
var fs = require('fs');
var csvParser = require('csv-parse');
var 

// fs.readdir('data', function(err,filelist){
//   var files = template.List(filelist);
//
//   fs.readFile(`data/${filteredId}`,'utf8',function(err,description){
//     if(pathname === '/'){ //home으로 갔을 때
//       if(title === undefined){ //welcome 페이지 설정
//         title = 'Welcome';
//         description = 'Hello, Node.js';
//         content = template.Html(title, files, control.Home(), `<h2>${title}</h2><p style="marin-top:45px;">${description}</p>`)
//       } else { //list 메뉴 선택했을때 create와update&delete버튼생성
//         content = template.Html(title,files, control.Subpage(),
//         `<h2>${title}</h2><p style="marin-top:45px;">${description}</p>`);
//       }
//         response.writeHead(200);
//         response.end(content);
//     }
//
// fs.readFile('./data/111110_data_v190407','utf8', function(err, csvData){
//   if (err){
//     console.log(err);
//   }
//   csvParser(csvData, {
//     delimiter : ','
//   }, function(err, data){
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data);
//     }
//   });
// });
