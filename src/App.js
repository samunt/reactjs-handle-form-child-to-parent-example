import React, {Component} from 'react';
import AgeTeller from './AgeTeller';
import moment from 'moment'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {age: ''}
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        console.log('eventInParent', e.target.value)
        let years = moment().diff(e.target.value, 'years');
        console.log('YEARS OLD', years)
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
