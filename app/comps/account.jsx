var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var {connect} = require('react-redux');
var SignIn = require('SignIn');
var AccountInfo = require('AccountInfo');

var Account = createReactClass({
    render() {
        var {username} = this.props;
        var xhtml = username === null ? <SignIn/> : <AccountInfo/>;
        return (
            <div>
                {xhtml}
            </div>
        )
    }
});
module.exports = connect(function(state){
    return {username: state.username};
})(Account);