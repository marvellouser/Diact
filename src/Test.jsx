import React, { Component } from 'react'

export default class Test extends Component {
    state = {
        num: 1
    }

    handleClick = () => {
        this.setState({
            num: this.state.num + 1,
        })
    }
    render() {
        return (
            <div>
                alksdglasdjg
                you clicked {this.state.num} time~~~

                asdgasdg
                <button onClick={this.handleClick}> + 1</button>  
            </div>
        )
    }
}
