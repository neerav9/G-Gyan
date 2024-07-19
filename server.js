let express=require('express');
let fs=require('fs');
let path=require('path');
let body_parser=require('body-parser');
const port=3000;
let app=express();
app.use(body_parser.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/post.html'));
})

app.get('/post',(req,res)=>{
    res.sendFile(path.join(__dirname,'/post.json'));
})
app.get('/event_post',(req,res)=>{
    res.sendFile(path.join(__dirname,'/event_post.html'));
})
app.get('/event',(req,res)=>{
    res.sendFile(path.join(__dirname,'/event.html'));
})
app.get('/event.css',(req,res)=>{
    res.sendFile(path.join(__dirname,'/event.css'));
})
app.get('/event_post.css',(req,res)=>{
    res.sendFile(path.join(__dirname,'/event_post.css'));
})
app.get('/queries',(req,res)=>{
    res.sendFile(path.join(__dirname,'/queries.html'));
})
app.get('/post.css',(req,res)=>{
    res.sendFile(path.join(__dirname,'/post.css'));
})
app.get('/queries.css',(req,res)=>{
    res.sendFile(path.join(__dirname,'/queries.css'));
})
app.get('/queries.js',(req,res)=>{
    res.sendFile(path.join(__dirname,'/queries.js'));
})
app.get('/event_json',(req,res)=>{
    res.sendFile(path.join(__dirname,'/event.json'));
})
app.get('/event.js',(req,res)=>{
    res.sendFile(path.join(__dirname,'/event.js'));
})
app.post('/post1',(req,res)=>{
    let rollno=req.body.rollno;
    let name=req.body.name;
    let subject=req.body.category;
    let desc=req.body.desc;
    let data=fs.readFileSync('post.json','utf-8');
    let obj={
        "rollno":rollno,
        "name":name,
        "subject":subject,
        "desc":desc,
        "status":"unsolved"
    }
    let product=data?JSON.parse(data):[];
    // if(!data){
    //   product=[];   
    // }
    // else{product=JSON.parse(data); console.log(product);}
    product.push(obj);
    fs.writeFileSync('./post.json',JSON.stringify(product));
    res.send('Posted successfully<br><br><button type="submit"><a href="./queries" style="text-decoration:none;">Queries</a></button>');
});

app.post('/event1',(req,res)=>{
    let date=req.body.date;
    let name=req.body.name;
    let time=req.body.time;
    let desc=req.body.desc;
    let event_data=fs.readFileSync('event.json','utf-8');
    let obj1={
        "date":date,
        "name":name,
        "time":time,
        "desc":desc
    }
    let event=event_data?JSON.parse(event_data):[];
    // if(!data){
    //   product=[];   
    // }
    // else{product=JSON.parse(data); console.log(product);}
    event.push(obj1);
    fs.writeFileSync('./event.json',JSON.stringify(event));
    res.send('Posted successfully<br><br><button type="submit"><a href="./" style="text-decoration:none;"></a></button>');
});
app.post('/post2',(req,res)=>{
    let rollno=req.body.rollno;
    let idno=req.body.idno;
    let name=req.body.name;
    let ans_desc=req.body.ans_desc;
    let data=fs.readFileSync('post.json','utf-8');
    // console.log(rollno+' '+idno+' '+name+' '+ans_desc);
    let product=data?JSON.parse(data):[];
    // console.log(product);

        product.forEach((val)=>{
            if(val.rollno===rollno){
                val.idno=idno;
                val.teacher_name=name;
                val.ans_desc=ans_desc;
                val.status="solved";
            }
        })
        // console.log(product);
        fs.writeFileSync('./post.json',JSON.stringify(product));
        res.send('Posted successfully <br><br><button type="submit"><a href="./queries" style="text-decoration:none;">Queries</a></button>');
    
});


app.listen(port,()=>{
    console.log('Server started');
})