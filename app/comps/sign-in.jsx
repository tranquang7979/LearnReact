var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var {connect} = require('react-redux');

var SignIn = createReactClass({
    handleSubmit(e){
        e.preventDefault();
        var {dispatch} = this.props;
        var {username, password} = this.refs;
        if(username.value === 'Steven' && password.value === '1'){
            dispatch({type:'LOG_IN', username: username.value});
        }
        else{
            
        }
        console.log('submit');
    },
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type='text' placeholder='Username' ref='username'/>
                    <br/><br/>
                    <input type='password' placeholder='Password' ref='password'/>
                    <br/><br/>
                    <button type='submit'>Sign In</button>
                </form>
            </div>
        )
    }
});
module.exports = connect()(SignIn);