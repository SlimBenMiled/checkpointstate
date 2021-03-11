import React, { Component } from 'react'

export default class App extends Component {
  state={person:{
    fullName: "slim" ,
    bio:"fsfqfqffsq" ,
    imgSrc: <img  src="https://pbs.twimg.com/profile_banners/779973740616638464/1601910739/1500x500"/>,
    
    profession:'developper',
    
  },
  show : true ,
  count : 0,
};
componentDidMount(){
  setInterval(() => {
    this.setState({ count: this.state.count + 1 });
  }, 1000);
}

  handleChange=()=>this.setState({show: !this.state.show,count:0})
  render() {
    return (
 

      <div>
      <button className="btn" onClick={()=>this.handleChange()}> {this.state.show ?"off":"on"} </button>  
      {this.state.show ?(
      <>
           <div>
<h1>Counter</h1>
        <h2>{this.state.count}</h2>
      </div>,
      <h1> {this.state.person.fullName} </h1>
      <h2>{this.state.person.bio}</h2>
      <h2>{this.state.person.imgSrc}</h2>
      <h2>{this.state.person.profession}</h2>
 
      </>): null}
      </div>

    )
  }
}
