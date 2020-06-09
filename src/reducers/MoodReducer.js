
const MoodReducer =(state, action) => {
    switch (action.type){
        case 'SELECT_MOOD':
            return  action.id
        default:
            return state
    }
}

export { MoodReducer as default}