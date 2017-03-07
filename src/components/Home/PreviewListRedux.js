const initialState = {
    loading: true,
    error: false,
    articleList: [],
}

//action types
const LOAD_ARTICLES = 'LOAD_ARTICLES';
const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS';
const LOAD_ARTICLES_ERROR = 'LOAD_ARTICLES_ERROR';

//action creators
export function loadArticles() {
    return {
        types: [LOAD_ARTICLES, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_ERROR],
        url: '/api/articles.json',
    };
}

//reducers
function previewList(state = initialState, action) {
    switch(action.type) {
        case LOAD_ARTICLES: {
            return {
                ...state,
                loading: true,
                error: false,
            }
        }

        case LOAD_ARTICLES_SUCCESS: {
            //debugger;
            return {
                ...state,
                loading: false,
                error: false,
                articleList: action.payload,
            }
        }

        case LOAD_ARTICLES_ERROR: {
            return {
                ...state,
                loading: false,
                error: true,
            }
        }

        default:
            return state;
    }
}

export default previewList;