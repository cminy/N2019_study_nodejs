var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

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

var app = http.createServer(function(request,response){
    var urlm = request.url;
    var queryData = url.parse(urlm,true).query;
    var pathname = url.parse(urlm, true).pathname;
    var title = queryData.id;

    fs.readdir('data', function(err,filelist){
      var files = templateList(filelist);

      fs.readFile(`data/${title}`,'utf8',function(err,description){
        var template=templateHtml(title, files, description)

        if(pathname === '/'){ //home으로 갔을 때
          if(title === undefined){ //welcome 페이지 설정
            title = 'Welcome';
            description = 'Hello, Node.js';
          }
          template =templateHtml(title,files,`<h2>${title}</h2><p style="margin-top:45px;"">${description}</p>`);

          response.writeHead(200);
          response.end(template);
        }
        else if(pathname === '/create'){
          title = 'WEB - Create';
          template =templateHtml(title,files,`
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
          request.on('data',function(data){ //data 수신할 때마다 function 실행
            body = body + data;
          });
          request.on('end',function(){ // 더이상 받을 data가 없는 경우
            var post = qs.parse(body); //qs : querystring모듈
            console.log(post);
            var title = post.title;
            var description = post.description;
            //파일생성
            fs.writeFile(`data/${title}`,description,'utf8',function(err){
              response.writeHead(302, {Location: `/?id=${title}`});
              response.end();
            })
          });
        } else {
        response.writeHead(404);
        response.end('Not Found');
        }
      });
  });
});
app.listen(3000); //3000은 포트넘버.
