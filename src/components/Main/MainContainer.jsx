import {connect} from "react-redux";
import Main from "./Main";
import {getFullAC, setIpAC} from "../../redux/main-redux";

let mapStateToProps = (state) => {
       return {
           myIp: state.mainPage.data
       }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setMyIp: (myIp) => dispatch(setIpAC(myIp)),
        getFullData: (fullData) => dispatch(getFullAC(fullData))
    }
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;