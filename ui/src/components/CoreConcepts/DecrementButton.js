import React from 'react';
import {Button} from 'react-bootstrap';

class DecrementButton extends React.PureComponent {
    render () {
        return (
        <div className="d-grid gap-2">
        <Button
         variant='info'
         onClick={this.props.onClick}
         >
          Decrement
        </Button>
        </div>
        );
    }
}

export default DecrementButton;