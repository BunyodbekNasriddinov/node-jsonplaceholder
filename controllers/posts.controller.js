const { read, queryFilter } = require("../utils/model");

module.exports = PostController = {
  GET: (req, res) => {
    const posts = JSON.parse(read("posts"));
    const query = req.query;

    // posts query for Post userId
    const filteredPostUserId = queryFilter("userId", query.userId, posts);
    if (filteredPostUserId.length) return res.json(200, filteredPostUserId);

    // posts query for Post id
    const filteredPostId = queryFilter("id", query.id, posts);
    if (filteredPostId.length) return res.json(200, filteredPostId);

    // posts query for Post title
    const filteredPostTitle = queryFilter("title", query.email, posts);
    if (filteredPostTitle.length) return res.json(200, filteredPostTitle);

    // posts query for Post body
    const filteredPostBody = queryFilter("body", query.body, posts);
    if (filteredPostBody.length) return res.json(200, filteredPostBody);

    res.json(200, posts);
  },
};
