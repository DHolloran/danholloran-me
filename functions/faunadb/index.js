const faunadb = require("faunadb");

module.exports = () => {
    const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET });

    return client;
};
