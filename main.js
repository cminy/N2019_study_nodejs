var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');

var app = http.createServer(function(request,response){
    var urlm = request.url;
    var queryData = url.parse(urlm,true).query;
    var pathname = url.parse(urlm, true).pathname;
    var title = queryData.id;
    var control = {
      Home : function(){
        return '<a href="/create">create</a>';
      },
      Subpage : function(){
        return `
        <a href="/create">create</a>
        <a href="/update?id=${title}">update</a>
        <form action="/delete_process" method="post"> <input type="hidden" name="titled" value="${title}"> <input type="submit" value="delete"> </form>
        `;
      }
    };
    var filteredId = path.parse(queryData.id).base;


    fs.readdir('data', function(err,filelist){
      var files = template.List(filelist);
      var content = template.Html(title,files,'','');

      fs.readFile(`data/${filteredId}`,'utf8',function(err,description){
        if(pathname === '/'){ //home으로 갔을 때
          if(title === undefined){ //welcome 페이지 설정
            title = 'Welcome';
            description = 'Hello, Node.js';
            content = template.Html(title, files, control.Home(), `<h2>${title}</h2><p style="marin-top:45px;">${description}</p>`)
          } else { //list 메뉴 선택했을때 create와update&delete버튼생성
            content = template.Html(title,files, control.Subpage(),
            `<h2>${title}</h2><p style="marin-top:45px;">${description}</p>`);
          }
            response.writeHead(200);
            response.end(content);
        }
        else if(pathname === '/create'){
          title = 'WEB - Create';
          content =template.Html(title,files,'',`
            <form action="/create_process" method="post">
              <p> <input type="text" name="title" placeholder="title" /></p>
              <p>
                <textarea name="description" placeholder="description"></textarea>
              </p>
              <p>
                <input type="submit" />
              </p>
            </form>
            `);//create버튼누르면 controlmodule 없어지게 '' 로.
          response.writeHead(200);
          response.end(content);
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
            });
          });
        } else if(pathname === '/update'){ //update버튼 눌렀을때
            content = template.Html(title,files,'',
            `
            <form action="/update_process" method="post">
              <input type="hidden" name="titled" value="${title}">
              <p> <input type="text" name="title" value="${title}" /></p>
              <p>
                <textarea name="description">${description}</textarea>
              </p>
              <p>
                <input type="submit" />
              </p>
            </form>
            `);

            response.writeHead(200);
            response.end(content);
        } else if(pathname === '/update_process'){
          var body = '';
          request.on('data',function(data){ //data 수신할 때마다 function 실행
            body = body + data;
          });
          request.on('end',function(){ // 더이상 받을 data가 없는 경우
            var post = qs.parse(body); //qs : querystring모듈
            console.log(post);
            var titled = post.titled;
            var title = post.title;
            var description = post.description;
            //파일명바꾸기
            fs.rename(`data/${titled}`,`data/${title}`,function(err){
              fs.writeFile(`data/${title}`,description,'utf8',function(err){
                response.writeHead(302, {Location: `/?id=${title}`});
                response.end();
              });
            });
          });
        } else if(pathname === '/delete_process'){
          //파일삭제
          var body = '';
          request.on('data',function(data){ //data 수신할 때마다 function 실행
            body = body + data;
          });
          request.on('end',function(){ // 더이상 받을 data가 없는 경우
            var post = qs.parse(body); //qs : querystring모듈
            var titled = post.titled;
            filteredId = path.parse(titled).base;
            fs.unlink(`data/${filteredId}`, function(err){
              response.writeHead(302, {Location: `/`});
              response.end();
            });
          });
        } else {
        response.writeHead(404);
        response.end('Not Found');
        }
      });
  });
});
app.listen(3000); //3000은 포트넘버.
