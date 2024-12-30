const { Router } = require('express');
const User = require('../models/user');
const router = Router();
console.log(User);
router.get("/signin", (req, res) => {
    res.render("signin");
});

router.get("/signup", (req, res) => {
    res.render("signup");
});
router.get("/logout", (req, res) => {
    res.clearCookie("token").redirect('/');
});

router.post('/signup', async (req, res) => {
    const {fullname,email,password } = req.body;
    console.log(req.body);
    try {
        await User.create({
            fullname,
            email,
            password,
        });
        return res.redirect("/"); 
    } catch (error) {
        console.error("Error during user registration:", error);
        return res.status(500).send("An error occurred while signing up.");
    }
});
router.post('/signin',async(req,res)=>{
    const {fullname,email,password } = req.body;
    try{
    const token=await User.matchpasswordandgentoken(email,password)
    console.log(token);
    return res.cookie('token',token).redirect('/');
    }
    catch(error){
        return res.render('signin',{
        error:"incorrect email or password",
        });
    }
})
module.exports = router;
