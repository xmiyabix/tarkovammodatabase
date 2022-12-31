import { Button } from "@mui/material";
import React, { useState } from "react";
import App from './App'
import Tabletest, { TableEntry } from './Tabletest'
import {getAmmodata}  from './ammodata'

function Root() {
    const [ammodata, setAmmodata] = useState<TableEntry[]>([]);//TableEntry型の空配列を渡してあげている
    return (<div>
        <App />
        <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['9*19']
            setAmmodata(getAmmodata(tmpname));
            }}>
            9×19mm</Button>

            <Button variant="outlined"
            onClick={() => {
            const tmpname :string[] = ['9*18']
            setAmmodata(getAmmodata(tmpname));
            }}>
            9×18mm</Button>
        <Tabletest entries={ammodata} />
    </div>);
}
export default Root