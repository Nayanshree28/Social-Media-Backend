import express from 'express';
import mongoose from 'mongoose';
import router from './Routes/user-routes.js';
import blogrouter from './Routes/blog-router.js';

const app = express();

app.use(express.json())
app.use("/api/user",router);
app.use("/api/blog", blogrouter);
mongoose.connect(
    // use your database password
    'mongodb+srv://nayanshree28022001:<db_password>@cluster0.qtcdc.mongodb.net/'

)
.then(()=>app.listen(5000))
.then(()=>console.log("Connected to database and Listening to localhost to 5000")
)
.catch((err) => console.log(err));

