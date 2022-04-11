const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require("./app");


dotenv.config({
    path:'./config.env',
})

const db = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD)

// console.log(process.env)
mongoose.connect(
    process.env.LOCAL_DB,
    // db,
    
    {
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false
    }
).then(()=>{
    console.log("Db connection successful! ..........")
});


app.listen(8000,()=>{
    console.log("the server is running........")
});