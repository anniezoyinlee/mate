import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import { Container, Col, Row } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Search extends Component {
  state = {
    userSearch: ""
  };

handleSubmit = (e) =>{
e.preventDefault()

}

componentDidMount(){
  console.log(API.getUsers())
}
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
                        name="userSearch"
                        onChange={this.handleInput}
                        placeholder="Search for a shop or mate"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <FormBtn onClick={this.handleSubmit} />
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <br />
          <Container>
            <h4>Search Results:</h4>
          </Container>
        </Container>
      </div>
    );
  }
}

export default Search;
