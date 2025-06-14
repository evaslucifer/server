const http=require("http");

const port=8081;
http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h2>hey server started-1234</h2>");
    res.end;

})
.listen(port,()=>{
    console.log(`node js server has started running on port ${port}`);

});

    