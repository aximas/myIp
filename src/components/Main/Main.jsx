import React from 'react';
import '../../App.scss';
import style from './Main.module.scss'
import ListContainer from '../List/ListContainer';
import Preloader from "../common/Preloader/Preloader";

const Main = (props) => {
    return <div className={style.main}>
        <div className="row">
            <p className={`${style.main__block} ${style.main__description}`}>
                Your IP:
            </p>
            <p className={`${style.main__block} ${style.main__value}`}>
                {props.isFetching ? <Preloader />  : props.myIp.map(item => item.yourIp)}
            </p>
        </div>
        <button className={style.main__button} onClick={props.getFullInfo}>Get full info</button>
        <div className="row">
            {(props.myIp.length) ?
                ((props.myIp[0].show_full) ?
                    <ListContainer/> :
                    null)
                : null}
        </div>
    </div>
}

export default Main;