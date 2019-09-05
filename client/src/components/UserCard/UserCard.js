import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col
} from "reactstrap";
import "./UserCard.css";

class UserCard extends React.Component {
  state = {};

  addOrDelete = () => {
    this.props.handleMate(this.props.info.id);
  };

  sendAlert = () =>
    alert("This function will only be available to paid subscribers!");

  render() {
    return (
      <div className="matecard">
        <Card>
          <CardImg
            top
            width="200px"
            height="200px"
            src={this.props.info.image}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{this.props.info.name}</CardTitle>
            <CardText>Hello, my name is {this.props.info.name}!</CardText>
            <Row>
              <Col md="6">
                <Button onClick={this.sendAlert}>Chat</Button>
              </Col>
              <Col md="6">
                <Button onClick={this.addOrDelete}>{this.props.friends}</Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default UserCard;
