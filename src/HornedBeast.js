import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class HornedBeast extends React.Component{
   constructor(props){
    super(props);
    this.state ={
        favorite :0
    }
   }
    favoriteClick = () => {
        this.setState({ favorite: this.state.favorite + 1 });
    }
   
   
   
   
    render(){
        return(
            
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.imageUrl} alt={this.props.description} onClick={this.favoriteClick}/>
      <Card.Body>
        <Card.Title>{this.props.title}❣ {this.state.favorite}</Card.Title>
        <Card.Text>
        {this.props.description}
        </Card.Text>
       
      </Card.Body>
    </Card>
            
          
        )
    }
}
export default HornedBeast;