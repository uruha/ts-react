import * as React from 'react';
import { createContext } from 'react';

type CounterType = {
    count: Number,
    increment: () => void,
    decrement: () => void
};

const {Provider, Consumer} = createContext<CounterType>({
    count: 0,
    increment: () => {},
    decrement: () => {}
});

const Count: React.SFC = () => (
    <Consumer>
        {
            ({ count, increment, decrement }: CounterType) => (
                <React.Fragment>
                    <div>count: {count}</div>
                    <button onClick={increment}>+1</button>
                    <button onClick={decrement}>-1</button>
                </React.Fragment>
            )
        }
    </Consumer>
);

export class Counter extends React.Component {
    state = {
        count: 0
    };
    increment = (): void => this.setState({
        count: this.state.count + 1
    });
    decrement = (): void => this.setState({
        count: this.state.count- 1
    });

    render() {
        return (
            <Provider
               value={{
                   count: this.state.count,
                   increment: this.increment,
                   decrement: this.decrement
               }}
            >
                <div>
                    <Count />
                </div>
            </Provider>
        )
    }
}