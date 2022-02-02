import React from 'react';
import {connect} from "react-redux";
import List from "./List";

const mapStateToProps = (state) => {
    return {
        data: state.mainPage.data[0].fullData
    }
}

const mapDispatchToProps = () => {
    return {}
}


export const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);
