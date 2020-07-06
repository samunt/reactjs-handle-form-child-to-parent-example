import React, {Component} from 'react'
class AgeTeller extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {value: ''}
    }
    handleClick(e) {
        this.setState({value: e.target.value})
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.clickMe(this.state.value)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <br/><br/>
                <h1>HOW OLD AM I</h1>
                <br/><br/>
                <input value={this.state.value} onChange={this.handleClick} type="date"/>
                <button>SUBMIT</button>
            </form>
        );
    }
}
export default AgeTeller;
