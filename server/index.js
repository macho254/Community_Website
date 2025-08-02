const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const BLOG_FILE = 'blogs.json';

// Load blogs
app.get('/blogs', (req, res) => {
  fs.readFile(BLOG_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Failed to load blogs.');
    res.json(JSON.parse(data || '[]'));
  });
});

// Add blog
app.post('/blogs', (req, res) => {
  const newBlog = req.body;
  fs.readFile(BLOG_FILE, 'utf8', (err, data) => {
    const blogs = data ? JSON.parse(data) : [];
    blogs.unshift(newBlog); // add to top
    fs.writeFile(BLOG_FILE, JSON.stringify(blogs, null, 2), err => {
      if (err) return res.status(500).send('Failed to save blog.');
      res.status(201).json(newBlog);
    });
  });
});

// Update a blog post
app.put('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = blogs.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).send('Not found');

  blogs[index] = { ...blogs[index], ...req.body };
  res.json(blogs[index]);
});

// Delete a blog post
app.delete('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = blogs.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).send('Not found');

  const deleted = blogs.splice(index, 1);
  res.json(deleted[0]);
});


app.listen(PORT, () => {
  console.log(`Blog backend running on http://localhost:${PORT}`);
});
