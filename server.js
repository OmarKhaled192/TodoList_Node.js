require('dotenv').config()

const express =  require('express'),
    app = express(),
    expressLayout = require('express-ejs-layouts'),
    mongoose = require('mongoose'),
    port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.use(expressLayout);

mongoose.connect(process.env.DB_URI);
const db = mongoose.connection ;

(async ()=> {
    await mongoose.connect(process.env.DB_URI)
    .then(() => console.log("DB Connection Succeded....."))
    .catch((err) => console.log(err.message));
})();

app.use(express.urlencoded({extended: false}));

app.use(require("./routes/web"));

app.listen(port , () =>  {
    console.log(`server running on localhost:${port} \n
        === open your browser on https://localhost:${port} ====`)
})