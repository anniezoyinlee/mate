import axios from "axios";

export default {
  getUsers: function() {
    return axios.get("/user/all");
  },
  getUser: function(id) {
    return axios.get("/api/saved/" + id);
  },
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
