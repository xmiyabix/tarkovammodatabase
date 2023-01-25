import { Button, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import App from './App'
import Tabletest, { TableEntry } from './Tabletest'
import {getAmmodata}  from './ammodata'
import Chart from './chart'
import Buttons from './buttons'
import Footer from './Footer'
import Header from './Header'
import Headertest from './test_muiappbar'
import './root.css'

const darkTheme = createTheme({
    palette:{
        mode: 'light',
    },
});

function Root() {
    //setAmmodataはammodataというストレージにアクセスするためのもの 次のammodataに内容を渡して自身に再描画をかける
    //useStateは再描画がかかった時にReact側で保存するためのもの
    //
    const [ammodata, setAmmodata] = useState<TableEntry[]>([]);//TableEntry型の空配列を渡してあげている
    return (<div className='container'>
        <ThemeProvider theme = {darkTheme}>
        <Headertest/>
        <CssBaseline/>
        {/*<Header />*/}
        <Buttons applyAmmoData={(entries)=>setAmmodata(entries)}/>
        <Chart entries={ammodata}/>
        <Tabletest entries={ammodata} />
        <Footer />
        </ThemeProvider>
    </div>);
}
export default Root
//<Chart entriesはChart内のprops.entriesに何を入れるかを指定している。