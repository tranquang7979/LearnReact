var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var {Link, IndexLink} = require('react-router');

var Nav = createReactClass({
    render() {
        return (
            <div>
                {/* <ul>
                    <li><IndexLink to="/" activeClassName="active">Homepage</IndexLink></li>
                    <li><Link to="/account" activeClassName="active">Account</Link></li>
                    <li><Link to="/transaction" activeClassName="active">Transaction</Link></li>
                </ul> */}
                <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text">Site Title</li>
                        <li>
                            <a href="#">Group Menu</a>
                            <ul className="menu vertical">
                                <li><IndexLink to="/" activeClassName="active">Homepage</IndexLink></li>
                                <li><Link to="/account" activeClassName="active">Account</Link></li>
                                <li><Link to="/transaction" activeClassName="active">Transaction</Link></li>
                            </ul>
                        </li>
                        <li><IndexLink to="/" activeClassName="active">Homepage</IndexLink></li>
                        <li><Link to="/account" activeClassName="active">Account</Link></li>
                        <li><Link to="/transaction" activeClassName="active">Transaction</Link></li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu">
                        <li><input type="search" placeholder="Search"/></li>
                        <li><button type="button" className="button">Search</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
});
module.exports = Nav;