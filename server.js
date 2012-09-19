require("http").createServer(function(req, res) {
    res.writeHead(200);
    res.end("Welcome to Amsterdam, detmar and Bas");
    console.log("hello");
}).listen(process.env.PORT);


console.log("Hello!:)");

