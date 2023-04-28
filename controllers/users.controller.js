const { read, queryFilter } = require("../utils/model");

module.exports = UserController = {
  GET: (req, res) => {
    const users = JSON.parse(read("users"));
    const query = req.query;

    // Users query for user id
    const filteredUserId = queryFilter("id", query.id, users);
    if (filteredUserId.length) return res.json(200, filteredUserId);

    // Users query for username
    const filteredUsername = queryFilter("username", query.username, users);
    if (filteredUsername.length) return res.json(200, filteredUsername);

    // Users query for username
    const filteredUserEmail = queryFilter("email", query.email, users);
    if (filteredUserEmail.length) return res.json(200, filteredUserEmail);

    // Users query for username
    const filteredUserWebsite = queryFilter("website", query.website, users);
    if (filteredUserWebsite.length) return res.json(200, filteredUserWebsite);

    res.json(200, users);
  },
};
