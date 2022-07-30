import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

 class  SelectedBeast extends Component{
    render(){
        return(
            <Modal show={this.props.show} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img  width={455} height={300} src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.title} />
                {this.props.selectedBeast.description}
                </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.handleClose}>
               close 
              </Button>
            </Modal.Footer>
          </Modal>
        )
    }
}
export default SelectedBeast ;