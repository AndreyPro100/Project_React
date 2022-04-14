const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hello world', tasks: 'My phone 428573498579'},
        {id: 2, message: 'Hi bitch', tasks: 'fuck you'},
        {id: 3, message: 'Hi bitch1', tasks: 'fuck you1'},
        {id: 4, message: 'Hi bitch2', tasks: 'fuck you2'},
    ],
    newPostText: 'Yelabuga_st',
};

const contentReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                tasks: 'My first push in this object'
            };

            state.posts.push(newPost);
            state.newPostText = ''; /* - Оставляет пустую строку после отправки текста*/
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};
export const CreatePostActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
};

export default contentReducer;