import React from 'react';
import {Button} from 'react-bootstrap'

class IncrementButton extends React.Component {
    render () {
        return (
        <div className="d-grid gap-2">
        <Button
         variant='info'
         onClick={this.props.onClick}
         >
          Increment
        </Button>
        </div>
        );
    }
}

export default IncrementButton;