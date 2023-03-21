import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    order: 'asc',
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ASC':
            return { order: 'asc'};
        case 'DESC':
            return { order: 'desc'};
        default:
            return state;
    }
}

export default configureStore({ reducer });