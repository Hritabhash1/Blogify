const { Router } = require('express');
const multer = require('multer');
const path = require('path');
const Blog = require('../models/blogs');
const Comment = require('../models/comment');

const router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/uploads')); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, 
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }
        return cb(new Error('Only images are allowed'), false);
    }
});

router.get('/add-new', (req, res) => {
    return res.render('add-blog', {
        user: req.user, 
    });
});
router.get('/:id',async(req,res)=>{
const blog = await Blog.findById(req.params.id).populate("createdby");
const comments = await Comment.find({blogid:req.params.id}).populate("createdby");
console.log(comments);

return res.render('blog',{
    user : req.user,
    blog,
    comments
})
})

router.post('/add', upload.single('coverImage'), async (req, res) => {
    try {
        const { title, body } = req.body;
        console.log(req.body);

        const coverImageURL = req.file ? `/uploads/${req.file.filename}` : null;  

        console.log('Cover Image:', coverImageURL);

        const newBlog = await Blog.create({
            title,    
            body,       
            createdby: req.user._id,  
            coverImageURL,
        });

        return res.redirect(`/blog/${newBlog._id}`); 
    } catch (error) {
        console.error('Error creating blog:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/comment/:blogid', async (req, res) => {
    console.log('Received comment data:', req.body);  

    if (!req.body.content || req.body.content.trim() === '') {
        return res.status(400).send("Comment content cannot be empty");
    }

    try {
        const comment = await Comment.create({
            content: req.body.content, 
            blogid: req.params.blogid,  
            createdby: req.user._id,    
        });

        return res.redirect(`/blog/${req.params.blogid}`);
    } catch (err) {
        console.error("Error creating comment:", err);
        return res.status(500).send("Internal Server Error");
    }
});


module.exports = router;
