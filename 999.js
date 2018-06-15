// Express 기본 모듈 불러오기
var express = require('express');
var http = require('http');

// 익스프레스 객체 생성
var app = express();

// 첫번째 미들웨어에서 다음 미들웨어로 넘김
app.use(function(req, res, next) {
	console.log('첫번째 미들웨어에서 요청을 처리함.');
		
    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
   
	for(var j = 2; j<10; j++) {   
        for (var i = 1; i<10; i++)
            res.write(String(i) + ' X ' + String(j) + ' = ' + String(i*j)+'<br>');
    }
    res.end();
    }
);



// Express 서버 시작
http.createServer(app).listen(3001, function(){
  console.log('Express 서버가 3001번 포트에서 시작됨.');
});

/*for(var j = 2; j<10; j++) {
    System.out.printf("\n< %d 단 >\n",j);
    
    for (var i = 1; i<10; i++)
        System.out.printf("%d * %d = %d\n", j, i, j*i);
    }
    */