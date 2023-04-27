const url = require("url");
const querystring = require("querystring");

module.exports = class Express {
  constructor(req, res) {
    this.req = req;
    this.res = res;

    if (this.req.method !== "GET") {
      this.res.body = new Promise((res, rej) => {
        let str = "";
        req.on("data", (chunk) => (str += chunk));
        req.on("end", async () => res(JSON.stringify(str)));
      });
    }
  }

  get(route, callback) {
    let { query, pathname } = url.parse(route);
    this.req.query = querystring.parse(query);

    if (this.req.url === pathname && this.res.method === "GET") {
      callback(this.req, this.res);
    }
  }

  post(route, callback) {
    if (this.req.url === route && this.res.method === "GET") {
      callback(this.req, this.res);
    }
  }

  pur(route, callback) {
    if (this.req.url === route && this.res.method === "GET") {
      callback(this.req, this.res);
    }
  }

  patch(route, callback) {
    if (this.req.url === route && this.res.method === "GET") {
      callback(this.req, this.res);
    }
  }

  delete(route, callback) {
    if (this.req.url === route && this.res.method === "GET") {
      callback(this.req, this.res);
    }
  }
};
