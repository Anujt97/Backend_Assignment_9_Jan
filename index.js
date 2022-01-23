var express = require('express')
var blogs = require('./blogs')
var app = express()

var path = require('path')
var port = 5050

app.use(express.json())

app.get("/blogs/:id", (req, res)=>{
    // res.send(blogs)
    id = req.url.split('/')[2]
    console.log(req.url)
    console.log(id)
    blog=blogs.filter((blogs)=>blogs.id==id)
    res.send(blog)
}) 

app.put("/blogs/:id", function(req,res){
    let id = req.params.id
    let title= req.body.title

    let index = blogs.findIndex((blogs)=>{
        return (blogs.id == Number.parseInt(id))
    })

    if(index >=0){
        let b=blogs[index]
        b.title = title
        res.json(b)
    }else(
        res.status(404)
    )

})

app.delete("/blogs/:id",(req,res)=>{
    let id = req.params.id

    let index = blogs.findIndex((blogs)=>{
        return (blogs.id == Number.parseInt(id))
    })
    if(index >=0){
        let bl=blogs[index]
        blogs.splice(index, 1)
        res.json(bl)
    }else(
        res.status(404)
    )

})


app.listen(port, (err) => {
    if (err) {
        console.log("Server Busy")
    } else {
        console.log("Server running at http://127.0.0.1:"+port)
    }
})