var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var Nav = require('Nav');

var Main = createReactClass({
    render() {
        return (
            <div>
                <h1>Main</h1>
                <Nav/>
                <h3>Content:</h3>
                {this.props.children}
            </div>
        )
    }
});
module.exports = Main;