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
    postAdded: false,
}

// 변수로 액션값을 지정해주면 값을 재활용 할 수 있다.
const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}
const dummyPost = {
    id: 2,
    content: '더미데이터',
    User: {
        id: 1,
        nickname: '제제',
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                //앞에 추가되는 포스터를 등록해야 게시글위에 올라간다. 뒤로하면 아래로 포스팅이 쌓임
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        default:
            return state;
    }
};

export default reducer;