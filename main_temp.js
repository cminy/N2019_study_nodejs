var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

function templateList(filelist){
  var i = 0;
  var files = '</ol>';
  while (i < filelist.length){
    files = files + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
    i = i + 1;
  }
  files = files + '</ol>';
//  console.log(files);
  return files;
}

function templateHtml(title, list, body){
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
        <a href="/create">create</a>
        ${body}
    </body>
    </html>
    `;
}

var app = http.createServer(function(request,response){
    var urlm = request.url;
    var queryData = url.parse(urlm,true).query;
    var pathname = url.parse(urlm, true).pathname;
    var title = queryData.id;
    if(pathname === '/'){ //home으로 갔을 때
      fs.readdir('data', function(err,filelist){
        fs.readFile(`data/${title}`,'utf8',function(err,description){
          if(title === undefined){ //welcome 페이지 설정
            title = 'Welcome';
            description = 'Hello, Node.js';
          }
          var list = templateList(filelist);
//          console.log(list);

          var template =templateHtml(title,list,`<h2>${title}</h2><p style="margin-top:45px;"">${description}</p>`);
//          console.log(description);

          response.writeHead(200);
          response.end(template);
        });
      });
    } else {
      response.writeHead(404);
      response.end('Not Found');
      }
    }
  );
app.listen(3000); //3000은 포트넘버.
