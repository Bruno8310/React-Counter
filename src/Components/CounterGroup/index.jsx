import React from 'react';
import Counter from '../Counter'

class CounterGroup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            totalSum: 0
        }
    }

    getInputNumber = (even) => {
        const size = Number(even.target.value)
        if (size < 0) {
          console.log("size cannot be less than 0")
          return false
        }
        this.setState({
            count: size
        })
      }


    render() {
        return (
            <div>
                <h3>Number of Counter: <input onChange={this.getInputNumber} type="Number" value={this.state.count}/></h3>
                <h3>total sum: </h3>
                {
                    new Array(this.state.count).fill().map((value, index) =>
                        <Counter key={index} />)
                }
            </div>
        )
    }
}

export default CounterGroup