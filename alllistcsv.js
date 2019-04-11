//updated 20190411 cminy
//data폴더에 저장된 csv파일들 파일명을 모아 배열로 저장
module.exports = {
  GetFileList : function(fileversion,extension){
    var dirPath = path.join(__dirname,`./data/rawdata_v${fileversion}`);
    var fileExtname = `${extension}`; //specific file extension
    fs.readdir(dirPath, function(err, files){
      if (err){
        return console.log('Unable to scan directory: ' + err);
      }
      var csvFind = files.filter(function(file){
        return path.extname(file).toLowerCase() === FileExtname;
      }); //upercased 고려안함

      console.log(csvFind);
    });
  }


};

//
// var path = require('path');
// var fs = require('fs');
//
// //joining path of directory
// var dirPath = path.join(__dirname,'./data/rawdata_v190407');
// var extension = '.csv'; //specific file extension : *.csv
// fs.readdir(dirPath, function(err, files){
//   if (err){
//     return console.log('Unable to scan directory: ' + err);
//   }
//   var csvFind = files.filter(function(file){
//     return path.extname(file).toLowerCase() === extension;
//   }); //upercased 고려안함
//
//   console.log(csvFind);
// });
