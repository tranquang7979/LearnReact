var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var {Link, IndexLink} = require('react-router');

var Nav = createReactClass({
    render() {
        return (
            <div>
                <h1>Navigation</h1>
                <ul>
                    <li><IndexLink to="/" activeClassName="active">Homepage</IndexLink></li>
                    <li><Link to="/account" activeClassName="active">Account</Link></li>
                    <li><Link to="/transaction" activeClassName="active">Transaction</Link></li>
                </ul>
            </div>
        )
    }
});
module.exports = Nav;