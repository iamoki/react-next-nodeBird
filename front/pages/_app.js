// 페이지마다 공통되는것을 처리하는 페이지, pages들의 공통부분!
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore';

// 각 페이지의 리턴 부분이 컴포넌트에 들어간다
const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>NodeBird</title>
            </Head>
            <Component />
        </>
    );
};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

// 리덕스 설치 후 코드변경
export default wrapper.withRedux(NodeBird);