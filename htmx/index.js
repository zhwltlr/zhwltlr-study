const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let posts = [];
let notes = require("./posts");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/posts", (req, res) => {
  res.json(notes);
});

app.post("/api/posts", (req, res) => {
  const newPost = {
    id: Date.now(),
    title: req.body.title,
    content: req.body.content,
  };
  notes.push(newPost);
  res.status(201).json(newPost);
});

app.put("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedPost = {
    id: id,
    title: req.body.title,
    content: req.body.content,
  };
  const index = posts.findIndex((post) => post.id === id);
  if (index !== -1) {
    posts[index] = updatedPost;
    res.json(updatedPost);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

app.delete("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex((post) => post.id === id);
  if (index !== -1) {
    posts.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
