var mangReducer = (state = ['Android', 'iOS', 'NodeJS', 'ReactJS'], action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return [...state, action.item];
        case 'UPDATE_ITEM':
            state[action.index] = action.item;
            return state;
        case 'REMOVE_ITEM':
            return state.filter((e, i) => i != action.index);
        default:
            return state;
    }
}

module.exports = mangReducer;