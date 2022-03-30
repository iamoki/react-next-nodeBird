import React, { useCallback } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from '../reducers/user';


const FollowButton = ({ post }) => {
    const { me, followLoading, unfollowLoading } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    // 게시글 작성사 목록의 아이디가 내가 팔로우 하고있다면 그사람들의 리스트
    const isFollowing = me?.Followings.find((v) => v.id === post.User.id);
    const onClickButton = useCallback(() => {
        // 팔로우 하고있다면 언팔액션
        if(isFollowing) {
            dispatch({
                type: UNFOLLOW_REQUEST,
                data: post.User.id,
            })
        } else {
            dispatch({
                type: FOLLOW_REQUEST,
                data: post.User.id,
            })
        }
    }, [isFollowing]);
    return (
        <Button loading={followLoading || unfollowLoading} onClick={onClickButton}>
            {isFollowing ? '언팔로우' : '팔로우'}
        </Button>
    );
};

FollowButton.propTypes = {
    post: PropTypes.object.isRequired,
};

export default FollowButton;