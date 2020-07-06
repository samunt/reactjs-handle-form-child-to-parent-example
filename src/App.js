import React, {Component} from 'react';
import AgeTeller from './AgeTeller';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {age: ''}
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        e.preventDefault()
        console.log('eventInParent', e.target.value)
    };
    render() {
        return (
            <div className="App">
                <AgeTeller clickMe={this.handleClick}/>
            </div>
        );
    }
}

export default App;
