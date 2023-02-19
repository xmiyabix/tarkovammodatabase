import { Button, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import Chart from './Chart'
import Buttons from './Buttons'
import Footer from './Footer'
import Header from './Header'
import Headertest from './AppBar'
import Armordmgcalc from "./ArmorDmgCalc";
import './root.css'
import Table from "./Table";
import { getAmmodata,AmmoData } from './TarkovApiService';

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
        },
        background: {
            default: '#212121',
        },
        text: { primary: '#feebc8' },
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
    const [ammodata, setAmmodata] = useState<AmmoData[]>([]);//AmmoData型の空を渡してあげている
    return (<div className='container'>
        <ThemeProvider theme={tarkovTheme}>
            <Headertest />
            <CssBaseline />
            <Buttons applyAmmoData={(entries) => setAmmodata(entries)} />
            <Chart entries={ammodata} />
            <Table entries={ammodata} />
            <Footer />
        </ThemeProvider>
    </div>);
}
export default Root
//<Chart entriesはChart内のprops.entriesに何を入れるかを指定している。