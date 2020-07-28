import React from 'react';
import './Display.css'
import { Button } from './Button'

export class Display extends React.Component {
  state = {
    currentCount: 0
  }

  updateCount= () => {
    this.setState( prevState => ({currentCount: prevState.currentCount + 1}))
  }

  render() {

    return (
      <div>
        <p>{this.state.currentCount}</p>
        <Button buttonHandler={this.updateCount} buttonTxt='Add 1' />
        <Button buttonHandler={this.updateCount} buttonTxt='Add 2' />
      </div>
    )
  }
}

