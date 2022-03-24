import React from "react";
import './Dialog.css';
import {NavLink} from "react-router-dom";

let Dialog = (props) => {
    return (
        <div className='dialog'>
            <NavLink to={"/Dialog/" + props.id}>{props.name}</NavLink> {/*Получаем массив с людьми*/}
        </div>
    )
};


let Message = (props) => {
    return (
        <div className='dialog'>{props.message}</div>  /*Получаем массив с диалогами*/
    )
};


let Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
    let messageElement = props.messageData.map(message => <Message message={message.message}/>)

    return (
        <div className='dialogs'>
            <div className='dialogItems'>
                {dialogsElements}
            </div>
            <div className='message'>
                {messageElement} {/*Вызов функции с сообщениями*/}
            </div>
        </div>
    );
}

export default Dialogs;