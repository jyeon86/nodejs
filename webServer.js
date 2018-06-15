var http = require('http');

// 웹서버 객체를 만듭니다.
var server = http.createServer();

//웹 서버를 시작하여 192.168.0.5 IP와3000번 포트에서 대기하도록 만들고 싶다면 아래 코드를 참조합니다.
var host = '118.46.60.153';
var port = 3000;
server.listen(port, host, '50000', function() {
	console.log('웹 서버가 시작되었습니다. : %s, %d', host, port);
});

// 클라이언트 연결 이벤트 처리
server.on('connection', function(socket) {
	console.log('클라이언트가 접속했습니다. : %s, %d', socket.remoteAddress, socket.remotePort);
   
});


// 클라이언트 요청 이벤트 처리
server.on('request', function(req, res) {
	console.log('클라이언트 요청이 들어왔습니다.');
	
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.write("<!DOCTYOE html>");
    res.write("<html>");
    res.write("     <head>");
    res.write("         <title>응답 페이지</title>");
    res.write("     </head>");
    res.write("     <body>");
    res.write("         <h1>노드제이에스로부터의 응답 페이지</h1>");
    
    var cnt =0
    for(var i=1; i<=20; i++){
        if( i % 2 === 1){
          cnt ++;
          res.write("1~20 안에있는 " + cnt + "번째 홀수: " + String(i) + "<br>");
          }
    }
    
    res.write("     </body>");
    res.write("</html>");
    res.end();
    
});



