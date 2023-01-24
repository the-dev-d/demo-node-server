const app = require("express")();
const PORT = 8080;



app.get("/",(req,res)=> {
    
    return res.send("App working properly")
})

app.get("/:name",(req,res)=> {

    const name = req.params.name || "person";

    res.send("Hello "+name);
})




app.listen(PORT,()=>{
    console.log("Server started");
})