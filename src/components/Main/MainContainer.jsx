import {connect} from "react-redux";
import {getFullData, isToggleFetching, setMyIp} from "../../redux/main-redux";
import React from "react";
import * as axios from "axios";
import Main from "./Main";

class MainContainer extends React.Component {

    componentDidMount() {
        this.props.isToggleFetching(true);
        axios.get('https://api.ipify.org/?format=json')
            .then(response => {
                this.props.isToggleFetching(false);
                this.props.setMyIp([{yourIp: response.data.ip, show_full: false}])
            })
    }

    getFullInfo = () => {
        this.props.isToggleFetching(true);
        if (!this.props.myIp[0].show_full) {
            axios.get(`https://ipapi.co/${this.props.myIp[0].yourIp}/json`)
                .then(response => {
                    this.props.isToggleFetching(false);
                    this.props.getFullData([{fullData: response.data, yourIp: response.data.ip, show_full: true}])
                })
        }
    }

    render() {
        return <Main myIp={this.props.myIp} getFullInfo={this.getFullInfo} isFetching={this.props.isFetching} />
    }

}

let mapStateToProps = (state) => {
       return {
           myIp: state.mainPage.data,
           isFetching: state.mainPage.isFetching
       }
}

export default connect(mapStateToProps, {setMyIp, getFullData, isToggleFetching})(MainContainer);