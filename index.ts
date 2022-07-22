const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let mapper = require('./mapper.ts');
let database =  require('./common/databaseConnection.ts');

const app = express();
const PORT = 3010;
let connectDB = (new database()).connectDB();
 
app.use(bodyParser.json());
 
app.get("/", (req, res, next) => {
  res.send("PUBLIC API");
  next();
});


app.post('/add-blog', async (req, res, next) => {
  const blog = req.body;
  const serviceObj = (new mapper());
  let result = await serviceObj.addBlog(blog);
  res.send({ 'result': result });
  next();
})

app.post('/get-content', async (req, res, next) => {
  const blog = req.body;
  const serviceObj = (new mapper());
  let result = await serviceObj.getBlogContent(blog);
  res.send({ 'result': result });
  next();
})

app.post('/get-comment', async (req, res, next) => {
  const blog = req.body;
  const serviceObj = (new mapper());
  let result = await serviceObj.listingAllComment(blog);
  res.send({ 'result': result });
  next();
})

app.post('/get-comment-on-comment', async (req, res, next) => {
  const blog = req.body;
  const serviceObj = (new mapper());
  let result = await serviceObj.listingCommentOnComment(blog);
  res.send({ 'result': result });
  next();
})

app.post('/get-blogs', async (req, res, next) => {
  const blog = req.body;
  const serviceObj = (new mapper());
  let result = await serviceObj.listingBlogs(blog);
  res.send({ 'result': result });
  next();
})

app.listen(PORT);

console.log(`Serven listen on port: ${PORT}`)