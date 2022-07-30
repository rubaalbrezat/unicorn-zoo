import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import SelectedBeast from './SelectedBeast';
import data from './data.json';





class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      allBeast : data,
      selectedBeast :{},
      showModel: false
    }
    
  }
  displayModal = (beast) => {
    this.setState(
      {
        showModel:true,
        selectedBeast: beast

      }
    )
      
  }

  handleClose = () =>{
    this.setState({
        showModel:false
      }
    )

  }


  render(){
  return (
    <div className="App">
     <Header/>
     <Main allBeast={this.state.allBeast} displayModal={this.displayModal}/>
     <SelectedBeast  show={this.state.showModel} handleClose={this.handleClose} selectedBeast={this.state.selectedBeast}/>
     <Footer/>
    </div>
  );
}
}

export default App;
