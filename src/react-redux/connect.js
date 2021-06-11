import React, { useContext, useMemo, useReducer, useLayoutEffect } from "react";
import ReactReduxContext from "./ReactReduxContext";
import { bindActionCreators } from "../redux";
/**
 * 把组件和仓库进行关联 
    1.输入 mapstatetoprops
       把仓库中中的状态传入组件,让组件可以显示 
    2.输出 mapDispatchToProps
       组件里的操作改变仓库中状态 
    3.当仓库状态改变后,通知组件刷新 useLayoutEffect
      让组件读取到最新的仓库中的状态 
      
 * @param {*} mapStateToProps 把仓库状态映射为属性
 * @param {*} mapDispatchToProps 把 store.dispatch 方法映射为属性
 * @returns 
 */
function connect(mapStateToProps, mapDispatchToProps) {
  return function (OldComponent) {
    // HOC 高阶组件
    return function (props) {
      const { store } = useContext(ReactReduxContext);
      const { getState, dispatch, subscribe } = store;
      const prevState = getState();
      const stateProps = mapStateToProps(prevState);
      const dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
      /**
       * 当仓库状态改变后,通知组件刷新：
       * 1.useLayoutEffect 订阅仓库store的状态变化事件
       * 2.仓库的状态变化后调用
       *   forceupdate 让状态改变,让组件更新
       * 3.为保证只需要订阅一次,可以写个依赖项 store 或 空数组 或 subscribe
       */
      // useState也可以
      const [, forceUpdate] = useReducer((x) => x + 1, 0); // (x) => x + 1, 没有实际含义
      useLayoutEffect(() => {
        // 这个函数的返回值 React 会存起来，在下次执行回调之前的执行
        return subscribe(forceUpdate);
      }, [subscribe]);
      return <OldComponent {...props} {...stateProps} {...dispatchProps} />;
    };
  };
}
function connectClass(mapStateToProps, mapDispatchToProps) {
  return function (OldComponent) {
    // HOC 高阶组件
    return class extends React.Component {
      static contextType = ReactReduxContext;
      componentDidMount() {
        this.unsubscribe = this.context.store.subscribe(() => {
          this.setState(() => this.forceUpdate());
        });
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        const { getState, dispatch } = this.context.store;
        const prevState = getState();
        const stateProps = mapStateToProps(prevState);
        const dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
        return (
          <OldComponent {...this.props} {...stateProps} {...dispatchProps} />
        );
      }
    };
  };
}
export default connect;
