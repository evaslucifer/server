const http=require("http");

const port=8081
;
// http methods
/*
>> get :inorder to get data from server
 >>post : sending data server 
 >>delete: deleting the data from the database
 >>patch: updating certain fields
 >>put: full update 
 */

 const toDoList=["learn","apply","succed"];


 http.createServer((req,res)=>{
    const{method,url}=req;
    // console.log(method,url);
    if(url==="/todos"){
        if(method==="GET"){
            res.writeHead(200);
            res.write(toDoList.toString());
        }

    }
    res.end();
    // res.writeHead(200,{"content-type":"text/html"});
    // res.write("<h2>hey server started-1234</h2>");
    // res.end;

})
.listen(port,()=>{
    console.log(`node js server has started running on port ${port}`);

});


    