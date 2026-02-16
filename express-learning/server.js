const express = require('express');
const app = express();
app.use(express.json());
const pool = require('./db');


(async() =>{
    try{
        const [rows] = await pool.query('SELECT 1');
        console.log(rows);
        console.log('Database Connected');
    }catch(err){
        console.error("Database not connected",err.message);
    }
})();

app.post('/users',async(req,res) =>{
         const {id,name,age} = req.body;
         if(!id || !name || !age){
            return res.status(400).json({success:'Failed',message:'Please Provide correct details'});
         }
         try{
            const [result] = await pool.query('insert into users (Id,Name,Age) values(?,?,?)',[id,name,age]);
            if(result.affectedRows === 1){
                res.status(201).json({success:"success",message:'User Created'});
            }
         }catch(err){
            res.status(500).json({success:'Failed',message:'Error Creating user',error:err.message});
         }
});

app.get('/users/',async(req,res)=>{
        try{
            const [details] = await pool.query('select * from users');
            if(details.length === 0){
                return res.status(404).json({success:'Failed',message:'Database is Empty'});
            }
             res.status(200).json({success:'Success',details:details}); 
        }catch(err){
                res.status(500).json({success:'Failed',error:err.message});
            }

});

app.get('/users/:id',async(req,res)=>{
        const id = Number(req.params.id);
        try{
            const [details] = await pool.query('select * from users where id =?',[id]);
            if(details.length === 0){
                return res.status(404).json({success:'Failed',message:'user not found'});
            }
             res.status(200).json({success:'Success',details:details[0]});
        }catch(err){
                res.status(500).json({success:'Failed',error:err.message});
            }

});

app.put('/users/:id',async(req,res)=>{
    const id = Number(req.params.id);
    const {email} = req.body;
    if(!email){
        return res.status(400).json({success:'Failed',message:'Please enter the Mail'});
    }
    try{
        const [result] = await pool.query('update users set email =? where id =?',[email,id]); 
        if(result.affectedRows == 0){
            return res.status(404).json({success:'Failed',message:'User not found'});
        }
        res.status(200).json({success:'Success',message:'User updated'});
    }catch(err){
        res.status(500).json({success:'Failed',message:err.message});
    }
});

app.delete('/users/:id',async(req,res)=>{
    const id = Number(req.params.id);
    try{
        const [result] = await pool.query('delete  from users where id = ?',[id]);
        if(result.affectedRows == 0){
            return res.status(404).json({success:'Failed',message:'user not found'});
        }
        res.status(200).json({success:'success',message:'user deleted'});
    }catch(err){
        res.status(500).json({success:'Failed',message:err.message});
    }
});

app.use((req,res)=>{
    res.status(404).json({error:'Route not found'});
});

app.listen(2000,()=>{
    console.log("server running");
});