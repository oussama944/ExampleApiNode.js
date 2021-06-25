npm i -s nodemon express node js
npm i -s mongoose
npm i -s saslprep
npm i -s body-parser
npm i -s cors
use postman

pour acceder a l'api :
fetch('http://127.0.0.1:5500/posts')
    .then(res=>res.json())
    .then(res=>console.log(res))