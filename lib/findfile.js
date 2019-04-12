//last updated 20190412 cminy
var path = require('path');
var fs = require('fs');

//data폴더에 저장된 csv파일들 파일명을 모아 배열로 저장
module.exports = {
  GetFolderList : function(dataversion){
    var dirPath = `./data/rawdata_v${dataversion}`;
    fs.readdir(dirPath, function(err, folders){
      if(err){
        return console.log('Unalbe to scan directory : ' + err);
      }
      folders.forEach(function(folder){
      });
      console.log(folders);
    });
  }, //GetFolderList 끝

  GetFileList : function(dataversion,extension){
    var dirPath = `./data/rawdata_v${dataversion}`;
    // console.log('파일버전: ' + dataversion);
    var fileExtname = `${extension}`;

    fs.readdir(dirPath, function(err, folders){
      if(err){
        return console.log('Unalbe to scan directory : ' + err);
      }
      folders.forEach(function(folder){
      });
      var folderList = folders;
      console.log(folderList);
      console.log(folderList[1]);

      var i = 0;
      fs.readdir(`${dirPath}/${folderList[i]}`, function(err, files){
        while (folderList[i] != '.DS_Store' && i < folderList.length){
          var fileList = ['테스트'];
          console.log('패쓰투는: ' + dirPath2);
          files.filter(function(file){
            return path.extname(file).toLowerCase() === fileExtname; //upercased고려안함
          });
          console.log('---------------파일들: ' + files);
          fileList = fileList.concat(files);
          i = i + 1;
          }
      });
     });
  } //GetFileList 메소드 끝
};


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
