var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var {connect} = require('react-redux');

var Notification = createReactClass({
    render() {
        return (
            <div>
                <h1>Notification</h1>
                <p>{this.props.txt}</p>
            </div>
        )
    },
    componentDidMount(){
        var {dispatch} = this.props;
        setTimeout(()=>{
            dispatch({type: 'HIDE_NOTIFICATION'});
        }, 3000);
    }
});
module.exports = connect()(Notification);