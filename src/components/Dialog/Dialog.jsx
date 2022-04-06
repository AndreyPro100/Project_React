import React from "react";
import './Dialog.css';
import {NavLink} from "react-router-dom";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../Redux/dialogs-reducer";

let Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}
                                                                    avatar={dialog.avatar}/>)
    let messageElement = props.state.messages.map(message => <Message message={message.message}/>)

    let newMessageText = props.state.newMessageText;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onNewMessageChange = (e) => {
        let newMessage = e.target.value;
        props.dispatch(updateNewMessageActionCreator(newMessage));
        /*console.log(newText);  - Вывод в консоль то что сейчас в инпуте*/
    };

    return (
        <div className='dialogs'>
            <div className='dialogItems'>
                {dialogsElements}
            </div>
            <div className='message'>
                <div>{messageElement}</div>
                {/*Вызов функции с сообщениями*/}
                <div className="send">
                    <div><textarea type='text'
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'
                                   value={newMessageText}/></div>
                    <input type="button" value='send' onClick={onSendMessageClick}/>
                </div>
            </div>
        </div>
    );
}

let Dialog = (props) => {
    return (
        <div className='dialog'>
            <NavLink to={"/Dialog/" + props.id}>
                <div className="img">
                    <img src={props.avatar} alt=""/>
                    <span>{props.name}</span>
                </div>
            </NavLink> {/*Вставляет в урл ид человека и выводит имя*/}
        </div>
    )
};

let Message = (props) => {
    return (
        <div className='dialog'>{props.message}</div>
    )
};

export default Dialogs;