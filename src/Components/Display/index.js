import React from 'react';
import './Display.css'
import { Button } from './Button'
//import { Input } from './Input'

export class Display extends React.Component {
  state = {
    currentCount: 0
  }

  updateCount = ({target}) => {
    console.log(target)
    this.setState( prevState => ({currentCount: prevState.currentCount + Number(target.dataset.increment)}))
  }


  render() {

    return (
      <div>
        <p>{this.state.currentCount}</p>
        {/* <input >Type In a # Counter</input> */}
        <Button buttonHandler={this.updateCount} buttonTxt='Add 1' increment = {1}/>
        <Button buttonHandler={this.updateCount} buttonTxt='Add 2' increment = {2000}/>
      </div>
    )
  }
}

