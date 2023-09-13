const http = require("http");
const PORT = 8000;
const html = require("fs").readFileSync("./flash_mental_arithmetic.html");

//webサーバーを作る
const server = http.createServer((req,res)=>{
    //ブラウザからアクセスがきた時の処理
    res.writeHead(200,{ "Content-Type" : "text/html" });
    res.write(html);
    res.end();
});

server.listen(PORT, () => {
    console.log("server running!");
});