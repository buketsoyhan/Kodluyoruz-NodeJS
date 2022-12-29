const http = require('http');

const server = http.createServer((req,res)=>{

    const url = req.url;
    if(url==='/'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write('<h1>Home Page</h1>')
    }
    else if(url==='/about'){
        res.write('About Page')
    }
    else if(url==='/contact'){
        res.write('Contact Page')
    }
    else{
        res.write('404 Not Found')
    }
    res.end();
})

const port=3000;

server.listen(port, ()=>{
    console.log(`Port started at ${port}`);
} )