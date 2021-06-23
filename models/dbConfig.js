//connection a mongoDb
const mongoose=require('mongoose');
const uri ="mongodb+srv://dbUser:dbUserPassword@cluster0.xsn4m.mongodb.net/nodeApiExample"

mongoose.connect(
    uri,
    { useNewUrlParser: true,useUnifiedTopology: true  },
    (err)=>{
        if(!err)console.log("Mongodb connected");
        else console.log("Connection error : "+err);
    }
)