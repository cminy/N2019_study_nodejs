var testFolder = 'data';
var fs = require('fs');

fs.readdir(testFolder, function(err,filelist){
  console.log(filelist);
  if(err) throw err;
  filelist.forEach(function(file){
    console.log(testFolder+'/'+file);
    fs.stat(testFolder+'/'+file, function(err,stats){
      console.log(stats);
    });
  });
});
