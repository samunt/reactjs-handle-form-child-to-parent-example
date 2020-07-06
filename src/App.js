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
    handleClick(val) {
        let years = moment().diff(val, 'years');
        this.setState({age: years})
    };
    render() {
        const checkAge = ()=>{
            if(this.state.age > 1){
                return <h1>Age is {this.state.age}</h1>
            } else{
                return <h1>Age is not yet defined</h1>
            }
        }
        return (
            <div className="App">
                <AgeTeller clickMe={this.handleClick}/>
                {checkAge()}
            </div>
        );
    }
}

export default App;
