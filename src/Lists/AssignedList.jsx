import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import Item from './Item.jsx';

let styles = {
  backgroundColor: '#33cc33'
}

class AssignedList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      name: null,
      status: null
    }
  }

  handleDelete = (item) => {

    // NEED TO REFACTOR TO: setState()

    this.state.status = item.status
    this.state.name = item.name
    this.state.id = item.id

    this.props.sendData(this.state)

  }

  render() {

    return this.props.items
      .filter((item) => {
        return item.status === 'assigned'
      })
      .map((item, index) => {
        return (

          <Draggable key={item.id} draggableId={item.id} index={index} >
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.draggableProps}{...provided.dragHandleProps}>
                <div style={styles} className='listItem'>
                  <Item sendData={this.handleDelete} id={item.id} key={item.id} name={item.name} status={item.status} />
                  {item.content}
                </div>
              </div>
            )}
          </Draggable>

        )
      })
  }
}

export default AssignedList;