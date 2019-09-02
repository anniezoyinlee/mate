import axios from "axios";

export default {
  // Get all books from Google Books API based upon search parameters
  getUsers: function() {
    return axios.get(`/user/all`);
  },
  // Get all saved books from the database
  getUser: function(id) {
    return axios.get("/api/saved/" + id);
  },
  // Saves a book to the database
  createUser: function(data) {
    console.log(data);
    return axios.post("/user/new", data);
  },
  addFriend: function(id) {
    return axios.post("/user/addfriend", { id: id }).then(data => {
      return data;
    });
  },
  getMates: function() {
    return axios.get("/user/mates").then(data => {
      return data;
    });
  },
  deleteMate: function(id) {
    return axios.post("/user/mates", { id: id }).then(data => {
      return data;
    });
  }
};
