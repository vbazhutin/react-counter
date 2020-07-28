import React, { Fragment } from 'react';

import { Button } from './Button'

export class Display extends React.Component {
  state = {
    currentCount: 0
  }

  updateCount() {

  }

  render() {

    return (
      <Fragment>
        <p>{this.state.currentCount}</p>
        <Button buttonHandler={this.updateCount} buttonTxt='Add 1' />
      </Fragment>
    )
  }
}

