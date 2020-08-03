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
        this.props.decrease()
        this.setState((prevState) => ({
            number: prevState.number - 1
        }))
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

    // 执行render前获取新的props, 判断count是否一致,再更新
    componentWillReceiveProps(nextProps) {
        if (nextProps.count !== this.props.count) {
            this.setState({
                number: 0
            })
        }
    }
    // 移除之前执行逻辑代码，再render
    componentWillUnmount() {
        this.setState({
            number: 0
        })
    }

}

export default Counter