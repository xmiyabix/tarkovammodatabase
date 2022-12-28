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
            setAmmodata([{name:'9×19 Pst gzh',damage:54,penetration:20,armordmg:33,accuracy:0,recoil:0,lightbleed:0,heavybleed:0}]);
            }}>
            Outlined</Button>
        <Tabletest entries={ammodata} />
    </div>);
}
export default Root