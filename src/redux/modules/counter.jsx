const ADD_COUNTER = "ADD_COUNTER"

//초기값 설정
const initialState = {
  counter : 1,
}

export const addNumber = (payload) => {
  return {
    type : ADD_COUNTER,
    payload,
  }
}


export const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + 1, // 이 부분을 1씩 증가하도록 수정
      };
    default:
      return state;
  }
};


