const initialState = {
    name: 'Nikhil',
    address: 'B-56 Jaldeep'
}
const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'update/user':
            state.name = 'Rinkal Panchal';
            state.address = 'H-204 Divya residency'
            return state;
        default:
            return state;
    }
}

export default userInfoReducer;