import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import { Container, Col, Row } from "../../components/Grid";
import UserCard from "../../components/UserCard";

class Search extends Component {
  state = {
    users: [],
    currentUser: ""
  };

  componentDidMount = () => {
    API.getUsers().then(res => this.setState({ users: res.data }));
  };

  handleAdd = id => {
    console.log(`friend id is ${id}`);
    API.addFriend(id).then(data => console.log(data));
  };

  handleChat = () => {};

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        onChange={this.handleInput}
                        placeholder="Search for a shop or mate"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <FormBtn onClick={this.handleSubmitBook} />
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <br />
          <Container>
            <h4>Search Results:</h4>
            <Row>
              {this.state.users.map(user => {
                return (
                  <Col size="xs-12 sm-6 md-3">
                    <UserCard info={user} handleAdd={this.handleAdd} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}

export default Search;
