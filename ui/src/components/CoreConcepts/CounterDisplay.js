import React from 'react';

const CounterDisplay = ({count}) => (
   React.createElement(
        'h1',
        {className: 'mt-2 mb-4'},
        count,
    )
);

export default CounterDisplay;

