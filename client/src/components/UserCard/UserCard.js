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
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Row>
              <Col md="6">
                <Button>Chat</Button>
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
