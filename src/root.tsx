import { Button } from "@mui/material";
import React, { useState } from "react";
import App from './App'
import Tabletest, { TableEntry } from './Tabletest'
import {getAmmodata}  from './ammodata'
import Buttons from './buttons'
import Footer from './Footer'
import Header from './Header'
import Testtable from './cellcolorchange'
import './root.css'

function Root() {
    const [ammodata, setAmmodata] = useState<TableEntry[]>([]);//TableEntry型の空配列を渡してあげている
    return (<div className='container'>
        <Header />
        <Buttons />
        <Footer />
    </div>);
}
export default Root