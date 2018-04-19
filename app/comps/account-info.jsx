var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var {connect} = require('react-redux');

var AccountInfo = createReactClass({
    handleSubmit(e){
        e.preventDefault();
        var {dispatch} = this.props;
        dispatch({type:'LOG_OUT'});
    },
    render() {
        var {username} = this.props;
        return (
            <div>
                <h1>Account Information</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <p>Username: {this.props.username}</p>
                    <button type='submit'>Log out</button>
                </form>
            </div>
        )
    }
});
module.exports = connect(function(state){
    return {username: state.username};
})(AccountInfo);