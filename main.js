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


    fs.readdir('data', function(err,filelist){
      fs.readFile(`data/${title}`,'utf8',function(err,description){
        var list = templateList(filelist);
        var template=templateHtml(title, list, body)

        if(pathname === '/'){ //home으로 갔을 때
          if(title === undefined){ //welcome 페이지 설정
            title = 'Welcome';
            description = 'Hello, Node.js';
          }
          template =templateHtml(title,list,`<h2>${title}</h2><p style="margin-top:45px;"">${description}</p>`);

          response.writeHead(200);
          response.end(template);
        }
        else if(pathname === '/create'){
          title = 'WEB - Create';
          list = templateList(filelist);
          template =templateHtml(title,list,`
            <form action="http://localhost:3000/create_process" method="post">
              <p> <input type="text" name="title" placeholder="title" /></p>
              <p>
                <textarea name="description" placeholder="description"></textarea>
              </p>
              <p>
                <input type="submit" />
              </p>
            </form>
            `);
          response.writeHead(200);
          response.end(template);
        } else if(pathname === '/create_process'){
          var body = '';
          request.on('data',function(data){
            body = body + data;
          });
          request.on('end',function(){
            var post = qs.parse(body);
            var title = post.title;
            var description = post.description;
            fs.writeFile(`data/${title}`,'utf8',function(err){
              response.writeHead(302, {Location: `?/id=${title}`});
              response.end();
            })
          })
        } else {
        response.writeHead(404);
        response.end('Not Found');
        }
      });
  });
});
app.listen(3000); //3000은 포트넘버.
