require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
const cookieparser = require('cookie-parser');
const { checkforauthcookie } = require('./middleware/authentication');
const userrouter = require('./routes/user');
const blogrouter = require('./routes/blogs');
const app = express();
const port =process.env.PORT || 8000;
const blogs = require('./models/blogs');

app.set("view engine","ejs");
app.set('views', path.resolve("./views"));

app.use(express.json()); // To parse JSON body
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded form data
app.use(cookieparser()); // Fixed cookie parser
app.use(checkforauthcookie("token")); // Middleware for authentication

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB is connected'))
    .catch((err) => {
        console.log('MongoDB connection failed', err);
        process.exit(1); // Terminate if MongoDB connection fails
    });

// Routes
app.get("/", async(req, res) => {
    try {
        const allblogs = await blogs.find({});
        res.render("home", {
            user: req.user, 
            blogs: allblogs
        });
    } catch (err) {
        console.error("Error fetching blogs:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.use("/user", userrouter); 
app.use("/blog", blogrouter); 

app.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
});
