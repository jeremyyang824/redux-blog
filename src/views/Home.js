import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';

import PreviewList from '../components/Home/PreviewList';
import {actions} from './HomeRedux';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <PreviewList {...this.props.previewList} {...this.props.actions} push={this.props.push} />
            </div>
        );
    }
}

export default connect(
    (state, ownProps) => {
        //map state to props
        return state.home
    },
    dispatch => {
        //map dispatch to props
        return {
            push: bindActionCreators(push, dispatch),       //分发router push action
            actions: bindActionCreators(actions, dispatch)  //将actions中的每一个action creators与dispatch绑定
        }
    }
)(Home);    //导出connect redux后的高阶组件