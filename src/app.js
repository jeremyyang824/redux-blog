import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './redux/configureStore';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {hashHistory, browserHistory} from 'react-router';
import routes from './routes';
import DevTools from './redux/DevTools';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);   //将路由状态数据整合入store
history.listen(location => console.log(location.pathname));

ReactDOM.render((
    <Provider store={store}>
        <div>
            {routes(history)}
            <DevTools />
        </div>
    </Provider>
), document.getElementById('root'));
