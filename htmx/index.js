const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let posts = require("./posts");
let contact = require("./contact");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/qna", (req, res) => {
  res.sendFile(__dirname + "/qna.html");
});

function generatePostListHTML(posts) {
  let html = "";
  posts.forEach((post) => {
    html += `
        <li class="list-group-item">
            <h4 style="padding:10px 0 0">${post.title}</h4>
            <p>${post.content}</p>
            <button class="btn btn-dark"
                hx-get="/api/posts/${post.id}/edit"
                hx-target="closest li"
                hx-swap="innerHTML"
                hx-trigger="edit"
                _="on click
                    if .editing is not empty
                    Swal.fire({title: 'Already Editing',
                                showCancelButton: true,
                                confirmButtonText: 'Yep, Edit This Row!',
                                text:'Hey!  You are already editing a row!  Do you want to cancel that edit and continue?'})
                    if the result's isConfirmed is false
                        halt
                    end
                    send cancel to .editing
                    end
                    trigger edit">
                Edit
            </button>
            <button class="btn btn-danger" hx-delete="/api/posts/${post.id}" hx-confirm="Are you sure?" hx-target="#postList" hx-swap="innerHTML" hx-include="closest li">
                Delete
            </button>
        </li>`;
  });
  return html;
}

app.get("/api/posts", (req, res) => {
  const postListHTML = generatePostListHTML(posts);
  res.send(postListHTML);
});

app.post("/api/posts", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(newPost);
  const newPostList = generatePostListHTML(posts);
  res.send(newPostList);
});

app.get("/api/posts/:id/edit", (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex((cont) => cont.id === id);
  if (index !== -1) {
    const postToEdit = posts[index];
    const editPost = `
        <li class="list-group-item editing" data-post-id="${postToEdit.id}">
            <input name="title" value="${postToEdit.title}" class="form-control">
            <textarea name="content" class="form-control">${postToEdit.content}</textarea>
            <button class="btn btn-secondary" hx-get="/api/posts" hx-target="#postList">
                Cancel
            </button>
            <button class="btn btn-info" hx-put="/api/posts/${postToEdit.id}" hx-target="#postList" hx-swap="innerHTML" hx-include="closest li">
                Save
            </button>
        </li>
      `;
    res.send(editPost);
  } else {
    res.status(404).json({ error: "Contact not found" });
  }
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
    const updatePostsList = generatePostListHTML(posts);
    res.send(updatePostsList);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

app.delete("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex((post) => post.id === id);
  if (index !== -1) {
    posts.splice(index, 1);
    const deletePostsList = generatePostListHTML(posts);
    res.send(deletePostsList);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

// test
function contactListHTML(conatact) {
  let html = "";
  conatact.forEach((cont) => {
    html += `<tr id="contact-list">
        <td>${cont.name}</td>
        <td>${cont.email}</td>
        <td>
          <button class="btn btn-danger"
                  hx-get="/contact/${cont.id}/edit"
                  hx-target="closest tr"
                  hx-swap="outerHTML"
                  hx-trigger="edit"
                  data-contact-id="${cont.id}"
                  _="on click
                      if .editing is not empty
                        Swal.fire({title: 'Already Editing',
                                    showCancelButton: true,
                                    confirmButtonText: 'Yep, Edit This Row!',
                                    text:'Hey!  You are already editing a row!  Do you want to cancel that edit and continue?'})
                        if the result's isConfirmed is false
                          halt
                        end
                        send cancel to .editing
                      end
                      trigger edit">
            Edit
          </button>
          <button class="btn btn-danger" hx-delete="/contact/${cont.id}" hx-confirm="Are you sure?" hx-target="#contactList" hx-swap="innerHTML" hx-include="closest tr">
          Delete
        </button>
        </td>
      </tr>`;
  });
  return html;
}

app.get("/contact", (req, res) => {
  const contactList = contactListHTML(contact);
  res.send(contactList);
});

app.get("/contact/:id/edit", (req, res) => {
  const id = parseInt(req.params.id);
  const index = contact.findIndex((cont) => cont.id === id);
  if (index !== -1) {
    const contactToEdit = contact[index];
    const editForm = `
          <tr class='editing' data-contact-id="${contactToEdit.id}">
              <td><input name='name' value='${contactToEdit.name}'></td>
              <td><input name='email' value='${contactToEdit.email}'></td>
              <td>
                  <button class="btn btn-danger" hx-get="/contact" hx-target="#contactList">
                      Cancel
                  </button>
                  <button class="btn btn-danger" hx-put="/contact/${contactToEdit.id}" hx-target="#contactList" hx-swap="innerHTML" hx-include="closest tr">
                      Save
                  </button>
              </td>
          </tr>
      `;
    res.send(editForm);
  } else {
    res.status(404).json({ error: "Contact not found" });
  }
});

app.post("/contact", (req, res) => {
  const newContact = {
    id: contact.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  contact.push(newContact);
  const newContactList = contactListHTML(contact);
  res.send(newContactList);
  // res.status(201).json(newPost);
});

app.put("/contact/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedContact = {
    id: id,
    name: req.body.name,
    email: req.body.email,
  };
  const index = contact.findIndex((cont) => cont.id === id);
  if (index !== -1) {
    contact[index] = updatedContact;
    const updateContactList = contactListHTML(contact);
    res.send(updateContactList);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

app.get("/contact/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = contact.findIndex((cont) => cont.id === id);
  if (index !== -1) {
    const cancelContact = `
        <tr id="contact-list">
        <td>${contact[index].name}</td>
        <td>${contact[index].email}</td>
        <td>
          <button class="btn btn-danger"
                  hx-get="/contact/${contact[index].id}/edit"
                  hx-target="#contact-list"
                  hx-swap="outerHTML"
                  hx-trigger="edit"
                  _="on click
                      if .editing is not empty
                        Swal.fire({title: 'Already Editing',
                                    showCancelButton: true,
                                    confirmButtonText: 'Yep, Edit This Row!',
                                    text:'Hey!  You are already editing a row!  Do you want to cancel that edit and continue?'})
                        if the result's isConfirmed is false
                          halt
                        end
                        send cancel to .editing
                      end
                      trigger edit">
            Edit
          </button>
        </td>
      </tr>
    `;
    res.send(cancelContact);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

app.delete("/contact/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = contact.findIndex((cont) => cont.id === id);
  if (index !== -1) {
    contact.splice(index, 1);
    const deleteContactList = contactListHTML(contact);
    res.send(deleteContactList);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

app.post("/search", (req, res) => {
  const searhKeyword = {
    search: req.body.search,
  };
  const searchContact = contact.filter(
    (cont) =>
      cont.name.includes(searhKeyword.search) ||
      cont.email.includes(searhKeyword.search)
  );
  const searchContactList = contactListHTML(searchContact);
  res.send(searchContactList);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
