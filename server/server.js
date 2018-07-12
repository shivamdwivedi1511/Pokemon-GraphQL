const express =require("express");
const mongoose =require("mongoose");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const cors =require("cors");

//database configuration

const db =require("./config/keys").mongoURI;

//connecting mongoDB database
mongoose
        .connect(db,{ useNewUrlParser: true })
        .then(()=>console.log("connected to database"))
        .catch((err)=>console.log(err));


//setting app
const app =express();

//allow cross-origin request
app.use(cors());

app.use("/graphql",graphqlHTTP({
    graphiql:true,
    schema
}))

//setting up port
const port =process.env.PORT || 4000;


//listening to port
app.listen(port,()=>console.log(`listening to port ${port}`));


