import React, { Component } from "react";

export default class AddConatct extends Component {
  state = {
    name: "",
    city: "",
  };
add=(e)=>{
    e.preventDefault();
    if(this.state.name===" " || this.state.city==" "){
        alert("all field mandatory");
        return;
    }
    this.props.Addnow(this.state)
    this.setState({name:"",city:""});
  
}

  render() {
    return (
      <div className="ui main">
        <h2>add ContactCard</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field ">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="enter the name"
              onChange={(e) => this.setState({ name: e.target.value })}
              value={this.state.name}
            />
          </div>
          <div className="field ">
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="enter the city"
              onChange={(e) => this.setState({ city: e.target.value })}
              value={this.state.city}
            />
          </div>
          <button className="ui button blue"> Get Details</button>
        </form>
      </div>
    );
  }
}
