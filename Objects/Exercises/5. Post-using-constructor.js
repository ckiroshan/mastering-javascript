console.log("<=========== Ex Blog Post Object ===========>");

/**
 * You are building a blogging engine. The user is drafting
 * a post. But it is not published yet. Come up with a
 * constructor function for this.
 */

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

const blogPost = new Post("Hierophant", "This is it, he has become..", "Magdaleen");

console.log(blogPost);

