import contentReducer from "./content-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    state: {
        contentPage: {
            posts: [
                {id: 1, message: 'Hello world', tasks: 'My phone 428573498579'},
                {id: 2, message: 'Hi bitch', tasks: 'fuck you'},
                {id: 3, message: 'Hi bitch1', tasks: 'fuck you1'},
                {id: 4, message: 'Hi bitch2', tasks: 'fuck you2'},
            ],
            newPostText: 'Yelabuga_st',
        },
        dialogsPage: {
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
        },
    },
    renderEntireTree() {
        console.log('State change');
    },

    getState() {
        return this.state;
    },
    subscribe(observer) {
        this.state.renderEntireTree = observer;
    },

    dispatch(action) {
        this.state.contentPage = contentReducer(this.state.contentPage, action);
        this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action);
        this.state.renderEntireTree(this.state);
    },
}

window.store = store; /*- Для того, чтобы в консоли смотреть, что у нас обновилось*/

export default store;