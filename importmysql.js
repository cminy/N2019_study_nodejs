var path = require('path');
var fs = require('fs');
var finder = require('./lib/findfile.js'); //findfile template
// var csvParser = require('csv-parse');

finder.GetFolderList('190411');
// for(i=0; i < )

// var i = 0;
// console.log(csvFolders[i]);
//
// while (csvFolders[i] != '.DS_Store' && i < csvFolders.length){
//   finder.GetFileList('190411','.csv',csvFolders);
//   i ++ ;
// }

// fs.readFile(findcsv,'utf8', function(err, csvData){
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
