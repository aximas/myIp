import React from 'react';
import {connect} from "react-redux";
import Main from "./Main";
import {setIpAC} from "../../redux/main-redux";

let mapStateToProps = (state) => {
       return {
           myIp: state.mainPage.data
       }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setMyIp: (myIp) => dispatch(setIpAC(myIp))
    }
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;