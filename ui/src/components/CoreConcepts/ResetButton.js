import React from 'react';
import {Button} from 'react-bootstrap';

class DecrementButton extends React.PureComponent {
    render () {
        return (
         <div className="d-grid gap-2">
        <Button
         variant='danger'
         onClick={this.props.reset}
         >
          Reset
        </Button>
        </div>
        );
    }
}

export default DecrementButton;