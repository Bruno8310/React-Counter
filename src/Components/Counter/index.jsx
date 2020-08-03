import React from 'react';

class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
    }

    increase = () => {
        this.props.increase()
        this.setState((prevState) => ({
            number: prevState.number + 1
        }))
    }

    decrease = () => {
        this.setState((prevState) => ({
            number: prevState.number - 1
        }))
        this.props.decrease()
    }



    render() {
        return (
            <h2>
                <button onClick={this.increase}>+</button>
                <mark>{this.state.number}</mark>
                <button onClick={this.decrease}>-</button>
            </h2>
        )
    }

}

export default Counter