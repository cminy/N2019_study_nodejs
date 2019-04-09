var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var urlm = request.url;
    var queryData = url.parse(urlm,true).query;
    var pathname = url.parse(urlm, true).pathname;
    var title = queryData.id;
    if(pathname === '/'){
      fs.readFile(`data/${title}`,'utf8',function(err,description){
        if(title === undefined){ //welcome 페이지 설정
          title = 'Welcome';
          description = 'Hello, Node.js';
        }
          var template =`
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ol>
              <li><a href="/?id=html">HTML</a></li>
              <li><a href="/?id=css">CSS</a></li>
              <li><a href="/?id=javascript">JavaScript</a></li>
              <li><a href="/?id=blabla">blabla</a></li>
            </ol>
            <h2>${title}</h2>
            <p style="margin-top:45px;"">
              ${description}
            </p>
          </body>
          </html>
          `;
          response.writeHead(200);
          response.end(template);
      });
    } else {
      response.writeHead(404);
      response.end('Not Found');
      }
    }
  );
app.listen(3000); //3000은 포트넘버.
