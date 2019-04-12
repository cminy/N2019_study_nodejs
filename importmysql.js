var path = require('path');
var fs = require('fs');
var finder = require('./lib/findfile.js'); //findfile template
// var csvParser = require('csv-parse');

var csvFile = finder.GetFolderList('190411');

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
