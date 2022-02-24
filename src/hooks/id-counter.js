import React, { useReducer, useCallback } from 'react';

const IdCounter = () => {
    const reducer = (state, action) => {
        switch(action.type) {
          case 'INCREMENT':
            return { count: state.count + 1 };
          default:
            return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, { count: 0 } );

    const onAction = () => {
        dispatch({ type: 'INCREMENT' })
    };

    return [state.count, onAction];
}

export default IdCounter;