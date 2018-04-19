var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var axios = require('axios');

var HomePage = createReactClass({
    handleRequest(){
        // axios.get('/try')
        // .then(res => console.log(res.data))
        // .catch(err => console.log(err));

        axios.post('/axios', {username: 'Steven'})
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    },
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <button onClick={this.handleRequest.bind(this)}>Request</button>
            </div>
        )
    }
});
module.exports = HomePage;