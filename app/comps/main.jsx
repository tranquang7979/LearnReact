var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var axios = require('axios');
var {connect} = require('react-redux');

var Nav = require('Nav');
var Notification = require('Notification');

var Main = createReactClass({
    render() {
        var {notification} = this.props;
        var xhtml = notification !== null ? <Notification txt={notification}/> : null;
        return (
            <div className='row'>
                <Nav/>
                {xhtml}
                <h3>Content:</h3>
                {this.props.children}
            </div>
        )
    },
    componentDidMount(){
        var {dispatch} = this.props;
        axios.get('/getInfo')
        .then(res => {
            if(res.data !== 'LOGIN_FIRST'){
                dispatch({type: 'LOG_IN', username: res.data});
            }
        })
        .catch(err => console.log(err));
    }
});
module.exports = connect(function(state){
    return {notification: state.notification};
})(Main);