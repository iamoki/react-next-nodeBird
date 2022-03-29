import shortId from 'shortid';

export const initialState = {
    mainPosts: [{
        // 다른정보와 합쳐서 주는것들은 대문자로 시작
        id: 1,
        User: {
            id: 1,
            nickname: '닉네임1'
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [
            {
                src: 'https://dummyimage.com/200x200/000/fff&text=dummy1',
            },
            {
                src: 'https://dummyimage.com/200x200/000/fff&text=dummy2',
            },
            {
                src: 'https://dummyimage.com/200x200/000/fff&text=dummy3',
            },
        ],
        Comments: [
            {
                User: {
                    nickname: 'nero',
                },
                content: '우와 댓글1',
            },
            {
                User: {
                    nickname: 'bero',
                },
                content: '우와우와 댓글2',
            }
        ]
    }],
    imagePaths: [],
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
}

// 변수로 액션값을 지정해주면 값을 재활용 할 수 있다.
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

// export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
// export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
// export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

// export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
// export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
// export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

// export const LOAD_COMMENT_REQUEST = 'LOAD_COMMENT_REQUEST';
// export const LOAD_COMMENT_SUCCESS = 'LOAD_COMMENT_SUCCESS';
// export const LOAD_COMMENT_FAILURE = 'LOAD_COMMENT_FAILURE';

// export const RETWEET_REQUEST = 'RETWEET_REQUEST';
// export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
// export const RETWEET_FAILURE = 'RETWEET_FAILURE';

// export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
// export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
// export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
});


const dummyPost = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: '제제',
    },
    Images: [],
    Comments: [],
});

const dummyComment = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: '제제',
    },
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading: true,
                addPostDone: false,
                addPostError: null,
            };
        case ADD_POST_SUCCESS:
            return {
                ...state,
                //앞에 추가되는 포스터를 등록해야 게시글위에 올라간다. 뒤로하면 아래로 포스팅이 쌓임
                mainPosts: [dummyPost(action.data), ...state.mainPosts],
                addPostLoading: false,
                addPostDone: true,
            };
        case ADD_POST_FAILURE:
            return {
                ...state,
                addPostLoading: false,
                addPostError: action.error,
            };
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentLoading: true,
                addCommentDone: false,
                addCommentError: null,
            };
        case ADD_COMMENT_SUCCESS: {
            const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
            const post = { ...state.mainPosts[postIndex] };
            post.Comments = [dummyComment(action.data.content), ...post.Comments];
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = post;
            return {
                ...state,
                mainPosts,
                addCommentLoading: false,
                addCommentDone: true,
            };
        }
        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                addCommentLoading: false,
                addCommentError: action.error,
            };
        default:
            return state;
    }
};

export default reducer;