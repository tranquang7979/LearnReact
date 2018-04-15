import { isatty } from 'tty';

var redux = require('redux');

//var reducer = require('./reducer/reducer.js');
//updated path in webpack.config.js
var reducer = require('reducer');
// var defaultState = {
//     action: '',
//     mang: ['Android', 'iOS', 'NodeJS', 'ReactJS'],
//     isAdding: false
// };
// var reducer = (state = defaultState, action) => {
//     switch(action.type){
//         case 'TOGGLE_IS_ADDING':
//             return {...state, action: action.type, isAdding: !state.isAdding};
//         case 'ADD_ITEM':
//             return {...state, action: action.type, mang: [...state.mang, action.item]};
//         case 'REMOVE_ITEM':
//             return {...state, action: action.type, mang: state.mang.filter((e, i) => i != action.index)};
//         default:
//             return state;
//     }
// }

// var mangReducer = (state = ['Android', 'iOS', 'NodeJS', 'ReactJS'], action) => {
//     switch(action.type){
//         case 'ADD_ITEM':
//             return [...state, action.item];
//         case 'UPDATE_ITEM':
//             state[action.index] = action.item;
//             return state;
//         case 'REMOVE_ITEM':
//             return state.filter((e, i) => i != action.index);
//         default:
//             return state;
//     }
// }

// var isAddingReducer = (state = false, action) => {
//     switch(action.type){
//         case 'TOGGLE_IS_ADDING':
//             return !state;
//        default:
//             return state;
//     }
// }

// var reducer = redux.combineReducers({
//     mang: mangReducer,
//     isAdding: isAddingReducer
// });

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
store.subscribe(() => {
    var currentState = store.getState();
    console.log(currentState.action + ': ', currentState);

    var currentLog = $("#p-detail").html();
    var newLog = (new Date) + ': <br/> &nbsp;&nbsp;&nbsp;===>' + JSON.stringify(currentState) + '<br />' + currentLog;
    $("#p-detail").html(newLog);
});

console.log('Init Reducer: ', store.getState());

//store.dispatch({type: 'TOGGLE_IS_ADDING'});
//console.log('TOGGLE_IS_ADDING: ', store.getState());

//store.dispatch({type: 'ADD_ITEM', item: 'Unity'});
//console.log('ADD_ITEM: ', store.getState());

//store.dispatch({type: 'REMOVE_ITEM', index: 1});
//console.log('REMOVE_ITEM: ', store.getState());

module.exports = store;