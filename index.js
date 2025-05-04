import express from 'express';
import bodyParser from "body-parser";
import path from 'path';
import { log } from 'console';

const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

// To save our post in an array
let posts = [];
let nextId = 1; // To keep track of our post id

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

// Serve static files
app.use(express.static(path.join(process.cwd(), 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index',
        { title: 'The ZBlog', content: 'Welcome to my blog!',
            posts: posts
        }
    );
});

app.get('/createPost', (req, res) => {
    res.render('createPost', {title: 'Create your ZBlog post'});
});

app.post('/submit', (req, res) => {
    const input = req.body;
    // Add a unique ID to each post
    const newPost = {
        id: nextId++,
        ptitle: input.ptitle,
        pbody: input.pbody,
        createdAt: new Date()
    };
    posts.push(newPost);
    console.log(posts);
    res.redirect('/'); // Redirect to home page to see all posts
});


app.get('/edit/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    console.log(req.params);
    const post = posts.find(post => post.id === postId);
    
    if (!post) {
        return res.status(404).send('Post not found');
    }
    
    res.render('edit', { 
        title: "Let's Edit!",
        post: post
    });
});

app.post('/edit/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(post => post.id === postId);

    if (postIndex === -1) {
        return res.status(404).send('Post not found');
    }
    // Update the post
    posts[postIndex] = {
        ...posts[postIndex], // Keep the original id and creation date
        ptitle: req.body.ptitle,
        pbody: req.body.pbody,
        updatedAt: new Date()
    };

    res.redirect("/");
});

// Delete button Handler
app.post('/delete/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    posts = posts.filter(post => post.id !== postId);
    res.redirect('/');

});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});