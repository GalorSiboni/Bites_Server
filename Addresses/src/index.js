const mongoose = require('mongoose');
const app = require('./app')

const start = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDb');
    }
    catch{((err) => console.log(err))}
}
app.listen(5000, ()=>{
    console.log('Listening on port 3000');
})
