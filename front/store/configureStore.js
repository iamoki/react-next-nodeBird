// configureStore를 만드는 법
//next-redux-wrapper를 설치해 createWrapper를 가져올 수 있다. 
import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';

import reducer from '../reducers';

const configureStore = () => {
    const store = createStore(reducer);
    store.dispatch({
        type: 'CHANGE_NICKNAME',
        data: 'odokodok',
    })
    return store;
};

const wrapper = createWrapper(configureStore, { 
    // 아래 코드가 트루면 redux에 관해서 자세한 설명이 나온다.
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;