## react-redux

redux不仅可以和react一起使用，也可以和vue、angularjs，原生js一起使用

（单例）
redux 应用中,只能有一个 store，一个 reducer ，一个 state

单独写reducer，然后合并

每次 dispatch 都会把所有的 reducer都执行一次

redux中间件原理和koa是一模一样的