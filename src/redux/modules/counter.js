import { createSlice } from "@reduxjs/toolkit";



//초기값 설정
const initialState = {
  counter : 1,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers : {
    addNumber : (state,action) => {  //이건 지금 reducer이면서 action creator다.
      state.counter = state.counter + 1; //기존에 return 설정하는 것.
    }
  },
});

export default counterSlice.reducer; //리듀서 만들어줌
//리듀서 바깥으로 내보내기

export const {addNumber} = counterSlice.actions //이 actions가 addnumber를 가지는 객체를 의미한다

//action creator도 만들어줌