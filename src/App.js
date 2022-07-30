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


 filterBeastByHorndNumber = (e) =>{

  const hornNumber = parseInt(e.target.value);
  let filteredData = data ;
  if(hornNumber){

    filteredData =data.filter(item => item.horns === hornNumber);
  }
  this.setState({allBeast:filteredData})

 }



  render(){
  return (
    <div className="App">
     <Header/>
     <Main allBeast={this.state.allBeast} displayModal={this.displayModal} filterBeastByHorndNumber={this.filterBeastByHorndNumber}/>
     <SelectedBeast  show={this.state.showModel} handleClose={this.handleClose} selectedBeast={this.state.selectedBeast}/>
     <Footer/>
    </div>
  );
}
}

export default App;
