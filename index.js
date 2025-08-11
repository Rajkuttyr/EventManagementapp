
const mongoose = require("mongoose");
const path = require("path");

const express = require("express")
const app = express();
const userRouter = require("./Routes/routes")
const eventRouter = require("./Routes/eventroutes")
app.use("/uploads", express.static(path.join(__dirname,"uploads")));
app.listen(8080,()=>{
    console.log("App runing on port 8080");

});

app.use(express.json())
mongoose.connect("mongodb://localhost:27017/User")
.then(()=>{
    console.log("Mongodb connected");
})
.catch(err=>{
    console.log("error:",err);
});

app.use("/users",userRouter);
app.use("/events",eventRouter.Eventrouter);

