import { HYDRATE } from 'next-redux-wrapper';

// 스테이트를 바꾸고 싶을 때
const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {},
    },
    post: {
        mainPosts: [],
    }
};

export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}

export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
    }
}

// 액션을 만들어서 이것을 디스패치
const changeNickname = (data) => {
    return {
        type: 'CHANGE_NICKNAME',
        data,
    }
};

// state에 들어간것은 기본state
// (이전상태, 액션) => 다음상태를 만들어냄
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE :
            console.log(HYDRATE);
            return {...state, ...action.payload};
        case 'LOG_IN' :
            return {
                ...state,
                user : {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                },
            };
        case 'LOG_OUT' :
            return {
                ...state,
                user : {
                    ...state.user,
                    isLoggedIn: false,
                    user: null,
                }
            }
        // 기본값이 없으면 에러남
        default :
            return state;
    }
};

export default rootReducer;