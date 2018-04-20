var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

var {Provider} = require('react-redux');
var redux = require('redux');
var username = (state = null, action) => {
    switch(action.type){
        case 'LOG_IN':
            return action.username;
        case 'LOG_OUT':
            return null;
        default:
            return state;
    }
};
var notification = (state = null, action) =>{
    switch(action.type){
        case 'SHOW_NOTIFICATION':
            return action.txt;
        case 'HIDE_NOTIFICATION':
            return null;
        default:
            return state;
    }
};
var reducer = redux.combineReducers({username, notification});
var store = redux.createStore(reducer);
console.log(store.getState());
//store.dispatch({type:'LOG_IN', username: 'Steven'});
//console.log(store.getState());
//store.dispatch({type:'LOG_OUT'});
//console.log(store.getState());

var HomePage = require('HomePage');
var Main = require('Main');
var Nav = require('Nav');
var Transaction = require('Transaction');
var Account = require('Account');

var requireLogin = (nextState, replace, next) => {
    if(store.getState().username == null){
        replace('/');
    }
    next();
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={Main}>
            <IndexRoute component={HomePage} />
            <Route path='account' component={Account} />
            <Route path='transaction' component={Transaction} onEnter={requireLogin}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("root")
);