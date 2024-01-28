const express = require("express");
const mongoose = require("mongoose");
const Chat = require("./models/chat.model.js");
const methodOverride = require("method-override");
const path = require("path");
const app = express();
const PORT = 3000;

main()
  .then(() => {
    console.log("Mongodb Connected");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/chatting");
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/chats", async (req, res) => {
  const getChats = async () => {
    try {
      const chats = await Chat.find().sort({ update_at: -1 }).exec();
      return chats;
    } catch (error) {
      console.error(error);
    }
  };
  const chats = await getChats();
  res.render("AllChats", { chats });
});

app.get("/chats/:id/edit", async (req, res) => {
  const { id } = req.params;
  const chat = await Chat.findById(id);
  res.render("EditForm", { chat });
});

app.get("/chats/new", async (req, res) => {
  res.render("CreateNew");
});

app.post("/chats", async (req, res) => {
  const { msg, to, from } = req.body;
  const chat = new Chat({
    from: from,
    msg: msg,
    to: to,
    create_at: Date.now(),
    update_at: Date.now(),
  });
  await chat.save();
  res.redirect("/chats");
});

app.put("/chats/:id", async (req, res) => {
  const { id } = req.params;
  const { msg } = req.body;
  const updated = await Chat.findByIdAndUpdate(
    id,
    { msg: msg, update_at: Date.now() },
    { new: true }
  );
  res.redirect("/chats");
});

app.delete("/chats/:id", async (req, res) => {
  const { id } = req.params;
  await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
