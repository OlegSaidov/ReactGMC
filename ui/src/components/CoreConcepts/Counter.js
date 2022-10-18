import React, {useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CounterDisplay from './CounterDisplay';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import ResetButton from './ResetButton';

function Counter () {
    const [count, setCount] = useState(0);

    function increment () {
        setCount(count + 1);
    }

    function decrement () {
        setCount(count - 1);
    }

    function reset () {
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
                       <IncrementButton increment={increment}/>
                  </Col>
                  <Col>
                       <DecrementButton decrement={decrement}/>
                  </Col>
             </Row>
             <Row className='mt-4'>
                  <Col>
                       <ResetButton reset={reset}/>
                  </Col>
              </Row>
           </Container>
           );
}

export default Counter