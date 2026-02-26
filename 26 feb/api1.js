import express from "express";
const app=express();
const port=5000;

let books=[
    {
        id:1,
        name:"Maths",
        author:"Rd Sharma"
    },
    {
        id:2,
        name:"Scince",
        author:"Anshul"
    },
    {
        id:1,
        name:"CS",
        author:"Ayush"
    }

];

 // to get all the books
app.get("/api/books",(req,res)=>{
    res.send(books);
})

// to get book by particular id 
app.get("/api/books/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const book=books.find((b)=>b.id==id);
    if(book){
        res.send(book);
    }
    else{
        res.status(404).json({message:"Book not found"});
    }
    
})

let users=[
    {
        user_id:1,
        name:"Anshul",
        age:20
    },
    {
        user_id:2,
        name:"Aman",
        age:22
    },
    {
        user_id:3,
        name:"Arpit",
        age:18
    }

];


 // to get all the users
app.get("/api/users",(req,res)=>{
    res.send(users);
})

// to get user by particular user_id 
app.get("/api/users/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const user=users.find((u)=>u.user_id==id);
    if(user){
        res.send(user);
    }
    else{
        res.status(404).json({message:"user not found"});
    }
    
})

app.listen(port,()=>{   
    console.log(`Server is running on ${port} `);

})