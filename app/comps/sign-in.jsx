var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var {connect} = require('react-redux');
var axios = require('axios');

var SignIn = createReactClass({
    handleSubmit(e){
        e.preventDefault();
        var {dispatch} = this.props;
        var {username, password} = this.refs;
        // if(username.value === 'Steven' && password.value === '1'){
        //     dispatch({type:'LOG_IN', username: username.value});
        // }
        // console.log('submit');
        axios.post('/signIn',{username: username.value, password: password.value})
        .then(res => {
            if(res.data === 'Login success'){
                dispatch({type:'LOG_IN', username: username.value});
            }
            else{
                dispatch({type:'SHOW_NOTIFICATION', txt: 'Please recheck username or password.'});
            }
        })
        .catch(err => {console.log(err)});
    },
    render() {
        return (
            <div>
                <h1 className='text-center page-title'>Sign In</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type='text' placeholder='Username' ref='username'/>
                    <input type='password' placeholder='Password' ref='password'/>
                    <button type='submit' className='button expanded'>Sign In</button>
                </form>
            </div>
        )
    }
});
module.exports = connect()(SignIn);