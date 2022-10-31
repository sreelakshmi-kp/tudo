const express= require('express')
const cors=require('cors')
const app=express()

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
let todos=[]

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.get('/api/todos',(req,res)=>{
    res.json({todos:todos})
})
app.post('/api/add',(req,res)=>{
    todos.push(req.body.todo)
    res.json({success:true})
})

app.listen(4000,()=>{
    console.log('app started')
})