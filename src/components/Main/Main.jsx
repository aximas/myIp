import React from 'react';
import * as axios from "axios";
import '../../App.scss';
import style from './Main.module.scss'
import {ListContainer} from "../List/ListContainer";

const Main = (props) => {

    if (props.myIp.length === 0) {
        axios.get('https://api.ipify.org/?format=json')
            .then(response => {
                props.setMyIp([{yourIp: response.data.ip, show_full: false}])
            })
    }

    let getFullInfo = () => {
        if (!props.myIp[0].show_full) {
            axios.get(`https://ipapi.co/${props.myIp[0].yourIp}/json`)
                .then(response => {
                    props.getFullData([{fullData: response.data, yourIp: response.data.ip, show_full: true}])
                })
        }
    }

    return (
        <div className={style.main}>
            <div className="row">
                <p className={`${style.main__block} ${style.main__description}`}>
                    Your IP:
                </p>
                <p className={`${style.main__block} ${style.main__value}`}>
                    {props.myIp.map(item => item.yourIp)}
                </p>
            </div>
            <button className={style.main__button} onClick={getFullInfo}>Get full info</button>
            <div className="row">
                {(props.myIp.length) ?
                    ((props.myIp[0].show_full) ?
                        <ListContainer /> :
                        '')
                    : ''}
            </div>
        </div>
    )
}

export default Main;