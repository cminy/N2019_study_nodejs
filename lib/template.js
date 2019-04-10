module.exports = {
  List : function(filelist){
    var i = 0;
    var files = '</ol>';
    while (i < filelist.length){
      files = files + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
      i = i + 1;
    }
    files = files + '</ol>';
  //  console.log(files);
    return files;
  },
  Html : function(title, list, control, body){
  return`
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
        ${list}
        ${control}
        ${body}
    </body>
    </html>
    `;
  }
};

// var template = {
//   List : function(filelist){
//     var i = 0;
//     var files = '</ol>';
//     while (i < filelist.length){
//       files = files + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
//       i = i + 1;
//     }
//     files = files + '</ol>';
//   //  console.log(files);
//     return files;
//   },
//   Html : function(title, list, control, body){
//   return`
//     <!doctype html>
//     <html>
//     <head>
//       <title>WEB1 - ${title}</title>
//       <meta charset="utf-8">
//     </head>
//     <body>
//       <h1><a href="/">WEB</a></h1>
//         ${list}
//         ${control}
//         ${body}
//     </body>
//     </html>
//     `;
//   }
// };
//
// module.exports = template;
