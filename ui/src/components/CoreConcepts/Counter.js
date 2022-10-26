import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CounterDisplay from './CounterDisplay';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import ResetButton from './ResetButton';

function Counter () {
    const [count, setCount] = useState(0);

    function handleIncrementButtonClick () {
        setCount(count + 1);
    }

    function handleDecrementButtonClick () {
        setCount(count - 1);
    }

    function handleResetButtonClick () {
        setCount(0);
    }

    return (
           <Container className='counter-container'>
              <Row>
                  <Col>
                       <CounterDisplay count={count} />
                 </Col>
             </Row>
             <Row>
                  <Col>
                       <IncrementButton onClick={handleIncrementButtonClick}/>
                  </Col>
                  <Col>
                       <DecrementButton onClick={handleDecrementButtonClick}/>
                  </Col>
             </Row>
             <Row className='mt-4'>
                  <Col>
                       <ResetButton onClick={handleResetButtonClick}/>
                  </Col>
              </Row>
           </Container>
           );
}

export default Counter