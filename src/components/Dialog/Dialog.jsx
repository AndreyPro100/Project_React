import React from "react";
import './Dialog.css';
import {NavLink} from "react-router-dom";

let Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}
                                                                    avatar={dialog.avatar}/>)
    let messageElement = props.state.messages.map(message => <Message message={message.message}/>)

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
        <div className='dialog'>{props.message}</div>  /*Получаем массив с диалогами*/
    )
};

export default Dialogs;