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
    API.getMates().then(res => this.setState({ users: res.data }));
  };

  updateMates = () => {
    API.getMates().then(res => this.setState({ users: res.data }));
  };

  handleDelete = id => {
    console.log(id);
    API.deleteMate(id).then(data => {
      console.log(data);
      this.updateMates();
      alert("This person is no longer your mate :(");
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
            <h4>My Mates</h4>
            <Row>
              {this.state.users.map(user => {
                return (
                  <Col size="xs-12 sm-6 md-3" key={user.id}>
                    <UserCard
                      info={user}
                      handleMate={this.handleDelete}
                      friends="Delete"
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
