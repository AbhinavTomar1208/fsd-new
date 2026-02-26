import express from 'express';
const app=express();
const port=3000;
let books=[
    {id:1,name:'The Great Gatsby',author:'Scott Fitzgerald'},
    {id:2,name:'To Kill a Mockingbird',author:'Harper Lee'},
];
app.get('/api/books',(req,res)=>{
    res.send(books);
});
app.get('/api/books/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const book=books.find(book=>book.id===id);
    if(!book) return res.status(404).send('Book not found');
    res.json(book);
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});