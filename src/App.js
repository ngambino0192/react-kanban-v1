import React, { Component } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import './App.css';

import Header from './Partials/Header.jsx';
import AssignedList from './Lists/AssignedList.jsx';
import ActiveList from './Lists/ActiveList.jsx';
import ReviewList from './Lists/ReviewList.jsx';
import ItemForm from './Forms/ItemForm.jsx';
import { getAllItems, removeItem } from './actions/actions.js'
// import Footer from './Partials/Footer.jsx'; -> NEED TO REFACTOR

import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  componentDidMount() {

    this.props.dispatch(getAllItems())

  }


  removeItemFromInventory = (item) => {

    this.props.dispatch(removeItem(item))

  }

  render() {

    return (

      <div className="App">
        <Header items={this.state.items} />
        <section className="content">
          <div className="columns">
            <header className="assignedColumn" id="assignedColId">
              <h1>Assigned</h1>
              <hr />
              <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef}>
                      <AssignedList sendData={this.removeItemFromInventory} items={this.state.items} />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </header>
            <header className="activeColumn" id="activeColId">
              <h1>Active</h1>
              <hr />
              <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef}>
                      <ActiveList sendData={this.removeItemFromInventory} items={this.state.items} />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </header>
            <header className="reviewColumn" id="reviewColId">
              <h1>In Review</h1>
              <hr />
              <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef}>
                      <ReviewList sendData={this.removeItemFromInventory} items={this.state.items} />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </header>
          </div>
        </section>
        {/* <Footer /> */}
        <ItemForm addItem={this.addItemToInventory} />
        {/* <Footer /> */}
      </div>
    )
  }
}


export default connect()(App);
