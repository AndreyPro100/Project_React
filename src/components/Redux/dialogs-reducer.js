const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Normal'},
    ],
    dialogs: [
        {
            id: 1,
            name: 'Dima',
            avatar: 'https://i.pinimg.com/originals/8b/b5/9d/8bb59dd7125077711381d5916bd891f5.jpg'
        },
        {id: 2, name: 'Andrey', avatar: 'https://img.wallpapersafari.com/desktop/1440/900/11/86/Zsuiy0.png'},
        {
            id: 3,
            name: 'Kolya',
            avatar: 'https://yt3.ggpht.com/a/AATXAJzMKX1xB-bwTeJTbMhXnuKqnNP-iBHbM4Gi6Q=s900-c-k-c0xffffffff-no-rj-mo'
        },
        {
            id: 4,
            name: 'Kirya',
            avatar: 'https://i.pinimg.com/736x/c3/1a/24/c31a2413bfe284575cd7e32958dc8f95--bola-kaki-casual-clothes.jpg'
        },
        {
            id: 5,
            name: 'Monte Blank',
            avatar: 'https://i.pinimg.com/originals/79/27/cc/7927cc1fd76b5db6de6141fecbe2c953.jpg'
        },
    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        case SEND_MESSAGE:
            let newMessage = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({id: 3, message: newMessage});
            return state;
        default:
            return state;
    }
};

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageActionCreator = (newMessage) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: newMessage
    }
};

export default dialogsReducer;