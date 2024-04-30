const http =require("node:http")
const fs =require("node:fs");

const server = http.createServer((req,res)=>{

    res.writeHead(200,{"content-type":"text/html"}); 
fs.createReadStream("./index.html").pipe(res)
});
server.listen(3000,()=>{
    console.log("serve running")
})