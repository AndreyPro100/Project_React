import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Dialogs from "./components/Dialog/Dialog";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='content-wrapper'>
                    <Routes>
                        <Route exact path="/Dialog"
                               element={<Dialogs messageData={props.messageData} dialogsData={props.dialogsData}/>}/>
                        <Route path="/Content" element={<Content postData={props.postData}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
