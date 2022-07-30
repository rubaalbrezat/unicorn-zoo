import React from 'react';
import HornedBeast from './HornedBeast';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




class Main extends React.Component {
  filterData =(e) => {

this.props.filterBeastByHorndNumber(e);
  }
  render() {
    return (
      <>
      <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
          <Form.Select id="disabledSelect"   onChange={ this.filterData } >
            <option value=''>All</option>
            <option value='1'>One</option>
            <option value='2'>TWO</option>
            <option value='3'>Three</option>
            <option value='100'>WoW</option>
   
          </Form.Select>
        </Form.Group>
      <Row xs={1} md={5} className="g-4">

        {

          this.props.allBeast.map((item, idx) =>
            <Col key={idx}>
              <HornedBeast  title={item.title} imageUrl= {item.image_url} description={item.description} displayModal={this.props.displayModal} data={item} />
            </Col>
          )}

         
      </Row>
      </>
    )
  }
}
export default Main;