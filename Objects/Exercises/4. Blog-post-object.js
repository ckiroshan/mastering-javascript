console.log("<=========== Ex Blog Post Object ===========>");

/**
 * Create a blog post object with properties:
 *  title, body, author, views, comments => (author, body), isLive
 */

const blogPost = {
  title: "Hierophant",
  body: "This is it, he has become..",
  author: "Magdaleen",
  views: 100_000,
  comments: [
    {
      author: "Brian",
      body: "What are you trying to say..",
    },
    {
      author: "Kane",
      body: "Yeah, what do you mean??",
    },
  ],
  isLive: true,
};

console.log(blogPost);

