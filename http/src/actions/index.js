import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = () => {
    // Add the code for this action
    const action = () => {
        const promise = axios.get('http://localhost:5000/friends');
        return {
            type: ACTION_TYPE,
            payload: promise
        };
    };
};
