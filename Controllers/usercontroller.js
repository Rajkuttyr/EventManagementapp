const users = require("../Models/user")
async function handleGetAllUsers(req,res){
    const x = await users.find({});
    res.json(x);
    


}
function handleDeleteUsers(req,res){
    res.end("Hello");
}
async function handleAddUsers(req,res){
    const x = req.body;
    await users.create(x);
    return res.status(201).json(x)
}
module.exports ={
    handleGetAllUsers,
    handleDeleteUsers,
    handleAddUsers
}