import React, { useReducer, useContext, Dispatch } from 'react';

type CounterState = {
    count: number
};

const initialState: CounterState = { count: 0 };

function reducer(state: CounterState, action: any) {
    switch (action.type) {
        case 'reset': {
            return initialState;
        }
        case 'increment': {
            return { count: state.count + 1 };
        }
        case 'decrement': {
            return { count: state.count - 1 };
        }
        default: {
            return state;
        }
    }
}

// Container
const CounterContext = React.createContext<CounterState>(null as any);
const DispatchContext = React.createContext<Dispatch<any>>(null as any);

const HooksCounter = ({ initialCount }: { initialCount: number }) => {
    const [state, dispatch] = useReducer(reducer, { count: initialCount });
    return (
        <CounterContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                <HooksCount />
            </DispatchContext.Provider>
        </CounterContext.Provider>
    );
};

const HooksCount = () => {
    const state = useContext(CounterContext);
    const dispatch = useContext(DispatchContext);
    return(
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+(increment)</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-(decrement)</button>
        </div>
    );
};

export default HooksCounter;
