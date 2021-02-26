import React from "react";

const axios = require('axios');

export default {
getBook: function() {
  return axios.get('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyCservDk_S7nbd9ppxJDH9N67nGq5Yo0CE')
}
}
// Make a request for a user with a given ID

