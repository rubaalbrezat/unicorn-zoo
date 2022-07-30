import React from 'react';
import HornedBeast from './HornedBeast';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




class Main extends React.Component {
  render() {
    return (
      <Row xs={1} md={5} className="g-4">

        {

          this.props.allBeast.map((item, idx) =>
            <Col key={idx}>
              <HornedBeast  title={item.title} imageUrl= {item.image_url} description={item.description} displayModal={this.props.displayModal} data={item} />
            </Col>
          )}


      </Row>
    )
  }
}
export default Main;