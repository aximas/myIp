import React from 'react';
import axios from "axios";

const Main = (props) => {

    if (props.myIp.length === 0) {
        axios.get('https://api.ipify.org/?format=json')
            .then(response => {
                props.setMyIp(response.data.ip)
            })
    }

    return (
        <div>
            {props.myIp}
        </div>
    )
}

export default Main;