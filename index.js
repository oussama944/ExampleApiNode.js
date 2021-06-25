const express=require('express');
const app=express();
require('./models/dbConfig');
const postRoutes=require('./controllers/postsController');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');

//les midlewares
app.use(cors());//{origin:'url'}
app.use(bodyParser.json());
app.use('/posts',postRoutes);

app.listen(5500,()=>console.log('Server started: 5500'));

mongoose.set('useFindAndModify',false);
