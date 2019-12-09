// 1. Import ////////////////////////////////////////////////////////////////////////////////////////////

// 2. Actions ////////////////////////////////////////////////////////////////////////////////////////////

const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";

// 3. Action Createtor ////////////////////////////////////////////////////////////////////////////////////////////

const startTimer = () => {
  return {
    type: START_TIMER
  };
};

const restartTimer = () => {
  return {
    type: RESTART_TIMER
  };
};

const addSecond = () => {
  return {
    type: ADD_SECOND
  };
};

// 4. Reducer ////////////////////////////////////////////////////////////////////////////////////////////
const TIMER_DURATION = 1500;

const initialstate = {
  isPlaying: false,
  elapsedTime: 0,
  timerDuration: TIMER_DURATION
};

/* initial로 시작하고, 액션을 보낼 때 마다 자동으로 디폴트값으로 리듀서를 실행한다*/
const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state);
    case RESTART_TIMER:
      return applyRestartTimer(state);
    case ADD_SECOND:
      return applyAddSecond(state);
    default:
      return state;
  }
};

// 5. Reducer Functions ////////////////////////////////////////////////////////////////////////////////////////////

const applyStartTimer = state => {
  return {
    ...state,
    isPlaying: true
  };
};
const applyRestartTimer = state => {
  return {
    ...state,
    isPlaying: false,
    elapsedTime: 0
  };
};
const applyAddSecond = state => {
  if (state.elapsedTime < TIMER_DURATION) {
    return {
      ...state,
      elapsedTime: state.elapsedTime + 1
    };
  } else {
    return {
      ...state,
      isPlaying: false
    };
  }
};

// 6. Export Action Createtors ////////////////////////////////////////////////////////////////////////////////////////////
const actionCreator = {
  startTimer,
  restartTimer,
  addSecond
};

export { actionCreator };

// 7. Export Reducer ////////////////////////////////////////////////////////////////////////////////////////////
export default reducer;
