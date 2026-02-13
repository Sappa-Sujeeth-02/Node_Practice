const express = require('express');
const app = express();

app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.method,req.url);
    next();

})

let tasks = [];
app.get('/tasks',(req,res)=>{
    res.status(200).json(tasks);
});

app.post('/tasks',(req,res)=>{
    const {task} = req.body;
    if(!task || !task.trim() || typeof task !== 'string'){ 
        return res.status(400).json({success:false,message:"invalid input"})
    } 
    const newTask ={
        id:Date.now(),
        task,isCompleted:false
    };
    tasks.push(newTask);
    return res.status(201).json({success:true,newTask});
});

app.put('/tasks/:id',(req,res)=>{ 
        const id = Number(req.params.id);
        const {isCompleted} = req.body;
        if(typeof isCompleted !== 'boolean'){
            return res.status(400).json({success:false,message:'invalid input'});
        }
        const index = tasks.findIndex(task=> task.id == id);
        if(index === -1){
            console.log(id);
            return res.status(400).json({success:false,message:'task not found'});
        }
        tasks[index].isCompleted = isCompleted;
        return res.status(200).json({success:true,tasks:tasks[index]});
})

app.delete('/tasks/:id',(req,res)=>{
    const id = Number(req.params.id);
    tasks = tasks.filter(task=>task.id!==id);
    return res.status(200).json({success:true,message:'task Deleted'}); 
})


app.use((req,res)=>{
    res.status(404).send("Not Found");
});

app.listen(2000,()=>{
    console.log("server running");
});