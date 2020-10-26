
import React, { Component } from 'react';
import './App.css';
import Head from './components/Head/Head';
import LifeCycle from './components/LifeCycle/LifeCycle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    fullName : "Marwa JMAIEL",
    bio: "Crochet",
    imgSrc:"/isme.jpg",
    profession:"Engeneer",
    toggle: true,
    min :0,
    sec :0,}
  };
  componentDidMount() {
    setInterval(() => {
       this.setState({
        
          sec: this.state.sec ===59?0:this.state.sec+1,
          min: this.state.sec===59? this.state.min+1:this.state.min
      
      });
    },1000 );
  }
 
  toggle = () => {
    this.setState({ toggle: !this.state.toggle })
  };
  
 
render(){
  return(
    <>  
    <Head />
    <LifeCycle secd={this.state.sec} mint={this.state.min}></LifeCycle>
    {this.state.toggle ?(
    <div className='bloc'>
     <img src= {this.state.imgSrc} alt='me'/>
     <h1>{this.state.fullName}</h1>
     <h3>{this.state.profession}</h3>
     <h3>{this.state.bio}</h3>
     </div>):null}
     <button className='clickme' onClick={this.toggle}>Show Profile</button>
     
     
    </>
  );
}
};
export default App ;
