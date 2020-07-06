import React, {Component} from 'react'
class AgeTeller extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.state = {value: ''}
    }
    handleClick(e) {
        console.log('eventInChild', e.target.value)
        console.log('PROPS IN CHILD==> need clickme function',this.props)
        this.props.clickMe(e)
    }
    handleSubmit(e) {
        e.preventDefault()
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
