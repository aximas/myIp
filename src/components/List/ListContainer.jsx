import React from "react";
import {connect} from "react-redux";
import List from "./List";
import Preloader from "../common/Preloader/Preloader";

class ListContainer extends React.Component {

    // @param number will be as a string
    groupNumbers(number) {
        let groupedNumbers = '';
        let numAsStringReverse = '';

        if (!isNaN(number)) {
            numAsStringReverse = number.toString().split("").reverse().join("");
        } else {
            numAsStringReverse = number.split("").reverse().join("");
        }

        for (let i = numAsStringReverse.length - 1; i > -1; i--) {
            let realLength = i + 1;
            if (!(realLength % 3)) {
                groupedNumbers += ` ${numAsStringReverse[i]}`;
            } else {
                groupedNumbers += numAsStringReverse[i];
            }
        }

        return groupedNumbers;
    }

    // @param number will be as a string
    displayTimezone(utc) {
        let delimiterIndexOf = utc.length - 3;
        let utcWithDelimiter = '';
        for (let i = 0; i < utc.length; i++) {
            if (i === delimiterIndexOf) {
                utcWithDelimiter += `${utc[i]}:`;
            } else {
                utcWithDelimiter += utc[i];
            }
        }
        return utcWithDelimiter;
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <List
                data={this.props.data}
                groupNumbers={this.groupNumbers} displayTimezone={this.displayTimezone}
            />
            }

        </>
    }

}

const mapStateToProps = (state) => {
    return {
        data: state.mainPage.data[0].fullData,
        isFetching: state.mainPage.isFetching
    }
}

export default connect(mapStateToProps, {})(ListContainer);
