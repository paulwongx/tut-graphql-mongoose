const mutations = require('./mutations');
const queries = require('./queries'); // defaults to index.js within the folder

module.exports = {
    Mutation: {
        ...mutations
    },
    Query: {
        ...queries
    }
}