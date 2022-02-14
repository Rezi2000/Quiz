import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./admin/main/Navbar";
import Menu from "./admin/main/Menu";
import Answer from "./admin/home/Answer";
import '../../css/app.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
    return (
        <>
            <Navbar/>
            <Menu />

            <BrowserRouter>

                <Routes>
                        <Route  path='/admin/question' element={<Answer/>}/>
                </Routes>




            </BrowserRouter>

        </>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
