import React, { Component } from "react";
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
    API.addFriend(id).then(data => {
      if (!data.data) {
        alert("This person is already your mate!");
      } else {
        alert("User added to mates!");
      }
    });
  };

  handleChat = () => {};

  render() {
    return (
      <div>
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
                  <Col size="xs-12 sm-6 md-3" key={user.id}>
                    <UserCard
                      key={user.id}
                      info={user}
                      handleMate={this.handleAdd}
                      friends="Add"
                    />
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
