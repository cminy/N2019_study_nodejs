var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var urlm = request.url;
    var queryData = url.parse(urlm,true).query;
//    console.log(queryData.id);
    var title = queryData.id;

    if(urlm == '/'){
      title = 'welcome to my home';
    }
    if(urlm == '/favicon.ico'){
      response.writeHead(404);
    }
    response.writeHead(200);

    fs.readFile(`data${queryData.id}`, 'utf-8', function(err, description){
      var template = `
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
        </ol>
        <h2>${title}</h2>
        <p style="margin-top:45px;"">
          ${description}
        </p>
      </body>
      </html>
      `;
    response.end(template);
});
app.listen(3000); //3000은 포트넘버.
