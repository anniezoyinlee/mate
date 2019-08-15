import axios from "axios";

export default {
  // Get all books from Google Books API based upon search parameters
  getUsers: function(query) {
    return axios.get("/user/all");
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
  // Delete a book from the database
  deleteUser: function(id) {
    return axios.delete("/api/saved/" + id);
  }
};
