import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './component/Pages/Home';

function App() {
    return ( < >
        <
        Router >

        <
        Navbar / >

        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > } > < /Route> <
        /Routes>

        <
        /Router>

        <
        />
    );
}

export default App;