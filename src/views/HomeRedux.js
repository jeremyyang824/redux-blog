import {combineReducers} from 'redux';

import previewList, {
    loadArticles
} from '../components/Home/PreviewListRedux';

//组合组件reducers并导出
export default combineReducers({
    previewList,
});

//导出组件actions
export const actions = {
    loadArticles
};