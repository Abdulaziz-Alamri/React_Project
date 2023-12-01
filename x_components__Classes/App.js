import React, {Component} from 'react'

class App extends Component{
    constructor(){
       super()
       this.state = { answer: 'Yes'}
    }

    render(){
        return(
            <h1>Do you love me? {this.state.answer} </h1>
        )
    }
}

export default App