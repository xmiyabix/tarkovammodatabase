import { Button } from "@mui/material";
import React, { useState } from "react";
import App from './App'
import Tabletest, { TableEntry } from './Tabletest'

function Root() {
    const [ammodata, setAmmodata] = useState<TableEntry[]>([]);//TableEntry型の空配列を渡してあげている
    return (<div>
        <App />
        <Button variant="outlined"
            onClick={() => {
            setAmmodata([{id:1,name:'SUPERMEGARIP',damage:99999}]);
            }}>
            Outlined</Button>
        <Tabletest entries={ammodata} />
    </div>);
}
export default Root