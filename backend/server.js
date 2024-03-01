const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const {sequelize} = require("./models/index")
const cors=require("cors")
// const routes=require("./routes/publicRoutes")
const routes=require("./src/routes/publicRoutes")



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())
app.use("/customers",routes)

app.get("/",(req,res)=>{
    res.send("Hello World");
})


sequelize.sync({alter:true}).then(()=>{
    app.listen(`3001`,(req,res)=>{
        console.log(`Server is running on port 3001`)
    })
}).catch((error)=>{
    console.log(error)
})