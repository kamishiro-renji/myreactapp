import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      number: 0
    }
  }

  addNumber = () => {
    return this.setState(()=>{
      return {
        number: this.state.number + 1 
      }
    })
  }

  takeoutNumber = () => {
    return this.setState(()=>{
      return {
        number: this.state.number -1  
      }
    })
  }

  randomNumber = () => {
    return this.setState(() => {
      if(this.number = 7) {
        console.log("contratulations!!");
      }
      return {
        number: Math.floor(Math.random() * 10)
      }
      
    })
  }


  render(){
    const {number} = this.state;
    return(
      <div>
        <p>Initial number: {number}</p>
        <button onClick={()=>{this.addNumber()}}>+</button>
        <button onClick={()=>{this.takeoutNumber()}}>-</button>
        <button onClick={()=>{this.randomNumber()}}>random</button>
      </div>
    )
  }
}

export default App;
