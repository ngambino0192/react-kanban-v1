// import React from 'react';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      name: this.props.name,
      status: this.props.status
    }
  }



  handleClick = (e) => {
    e.preventDefault();
    // console.log('DELETE BUTTON ITEM.jsx', this.state)
    // console.log('item this.props', this.state)
    this.props.sendData(this.state)
  }

  render() {
    return (
      <div>
        {this.props.name} <br />
        {this.props.status} <br />
        {this.props.id} <br />
        <button onClick={this.handleClick} className='deleteBtn'>DELETE</button>
        <Router>
          <div>
            <Link className="App-title" to="/detail/:id">ticket details</Link>
            <Route path="/detail/:id" component={() => 'test component'} />
          </div>
        </Router>
      </div>
    )
  }
}


export default Item