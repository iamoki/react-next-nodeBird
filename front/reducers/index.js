import { HYDRATE } from 'next-redux-wrapper';
// 쪼갠 리듀서 합쳐주는 메소드
import { combineReducers } from 'redux';
// 쪼갠 리듀서 불러오기
import user from './user';
import post from './post';

// state에 들어간것은 기본state
// (이전상태, 액션) => 다음상태를 만들어냄
const rootReducer = combineReducers({
    // HYDRATE를 위해서 index추가한것(for 서버사이드렌더링을 위함)
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE :
                console.log(HYDRATE);
                return {...state, ...action.payload};
            // 기본값이 없으면 에러남
            default :
                return state;
        }
    },
    // initialState는 combineReducer가 알아서 넣어줌
    user,
    post,
});

export default rootReducer;