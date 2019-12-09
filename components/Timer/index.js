import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Timer from "./presenter";
import { actionCreator as tomatoActions } from "../../reducer";

mapStateProps = state => {
  const { isPlaying, elapsedTime, timerDuration } = state;

  return {
    isPlaying,
    elapsedTime,
    timerDuration
  };
};

// dispatch는 action을 리듀서로 보내는 function 이다.
mapDispathToProps = dispatch => {
  return {
    startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
    restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch)
  };
};

export default connect(mapStateProps, mapDispathToProps)(Timer);
