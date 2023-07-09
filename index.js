const exp = require('constants');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const members = require('./Members')
// const logger = require('./middleware/logger')


//Init Middleware
// app.use(logger);

//handlebars middleware
app.engine('handlebars',exphbs.engine({defaultlayout:'main'}));
app.set('view engine','handlebars');

//body parse middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//home page routes
app.get('/',(req,res)=>res.render('index',{title:'Member App',members}));

// app.get('/',(req,res)=>{
//     res.send('<h1>Hello World!</h1>');
// });


// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'));
// });



//set static folder
app.use(express.static(path.join(__dirname,'public')));

//members api routes
app.use('/api/members',require('./routes/api/members'));

const PORT = process.env.PORT||5000;
app.listen(PORT,()=>console.log(`server started on port ${PORT}`));
