import React from 'react';
import * as axios from "axios";
import '../../App.scss';
import style from './Main.module.scss'
import {ListContainer} from "../List/ListContainer";

class Main extends React.Component {

    componentDidMount() {
        axios.get('https://api.ipify.org/?format=json')
            .then(response => {
                this.props.setMyIp([{yourIp: response.data.ip, show_full: false}])
            })
    }

    getFullInfo = () => {
        if (!this.props.myIp[0].show_full) {
            axios.get(`https://ipapi.co/${this.props.myIp[0].yourIp}/json`)
                .then(response => {
                    this.props.getFullData([{fullData: response.data, yourIp: response.data.ip, show_full: true}])
                })
        }
    }

    render() {
        return (
                <div className={style.main}>
                    <div className="row">
                        <p className={`${style.main__block} ${style.main__description}`}>
                            Your IP:
                        </p>
                        <p className={`${style.main__block} ${style.main__value}`}>
                            {this.props.myIp.map(item => item.yourIp)}
                        </p>
                    </div>
                    <button className={style.main__button} onClick={this.getFullInfo}>Get full info</button>
                    <div className="row">
                        {(this.props.myIp.length) ?
                            ((this.props.myIp[0].show_full) ?
                                <ListContainer /> :
                                '')
                            : ''}
                    </div>
                </div>
        )
    }

}

export default Main;