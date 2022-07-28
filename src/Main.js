import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




class Main extends React.Component{
    render() {
        return (
            <Row xs={1} md={5} className="g-4">
            
            {
     
      data.map(item =>
        <Col>
      <HornedBeast title ={item.title} imageUrl={item.image_url} description={item.description}/>
      </Col>
    )  }
        
        
      </Row>
        )
    }
}
export default Main;