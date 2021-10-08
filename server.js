const http = require("http")
// const url = require("url")
const { getProducts, getProduct } = require("./controllers/productController")
// .match(/\/api\/products\/^[a-z ,.'-]+$/i)
const server = http.createServer((req, res) => {
    if(req.url === "/api/products" && req.method === "GET") {
       getProducts(req, res)
    //    
    }else if(req.url.match(/\/api\/products\//) && req.method === "GET" ) {
        const name = req.url.split("/")[3]
       
        // const urlObj = url.parse(req.url)
        console.log("a",name)
        getProduct(req, res, name)
    } else {
        res.writeHead(404, {"Content-Type": "application/json"})
        res.end(JSON.stringify({message: "Route Not Found"}))
    }
    
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))