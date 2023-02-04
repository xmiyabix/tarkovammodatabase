import { Button, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import App from './App'
import {AmmoDataEntry} from './ammodata'
import { getAmmodata } from './ammodata'
import Chart from './chart'
import Buttons from './buttons'
import Footer from './Footer'
import Header from './Header'
import Headertest from './test_muiappbar'
import Armordmgcalc from "./armordmgcalc";
import './root.css'
import Tabletest from "./Tabletest";

const tarkovTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1b5e20',
            light: '#4c8c4a',
            dark: '#003300'
        },
        secondary: {
            main:'#263238',
            light:'#4f5b62',
            dark:'#000a12'
        }
    }
})

const darkTheme = createTheme({
    palette: {
        mode: 'light',
    },
});
const tmp: number = 10;
function Root() {
    //setAmmodataはammodataというストレージにアクセスするためのもの 次のammodataに内容を渡して自身に再描画をかける
    //useStateは再描画がかかった時にReact側で保存するためのもの
    //
    const [ammodata, setAmmodata] = useState<AmmoDataEntry[]>([]);//AmmoDataEntry型の空配列を渡してあげている
    const [ammoSelect, setAmmoSelect] = useState<AmmoDataEntry>();
    return (<div className='container'>
        <ThemeProvider theme={tarkovTheme}>
            <Headertest />
            <CssBaseline />
            {/*<Header />*/}
            <Buttons applyAmmoData={(entries) => setAmmodata(entries)} />
            <Chart entries={ammodata} />
            <Tabletest entries={ammodata} />
            <Armordmgcalc Testvalue={10} entries={ammoSelect} />
            <Footer />
        </ThemeProvider>
    </div>);
}
export default Root
//<Chart entriesはChart内のprops.entriesに何を入れるかを指定している。