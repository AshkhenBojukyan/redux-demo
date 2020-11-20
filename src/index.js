import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const middlewares=applyMiddleware(loggerMiddleware,thunkMiddleware);

const defaultState={
  count:0
};
const mainReducer=(state=defaultState,action)=>{
  switch(action.type){
    case "INCREMENT":{
      return{
        ...state,
        count:state.count+1
      };
    }
    case "DECREMENT":{
      return{
        ...state,
        count:state.count-1
      };
    }
    case "ADD_VALUE10":{
      return {
      ...state,
      count:state.count+10
    };
  }
  case "SUB_VALUE10":{
    return {
    ...state,
    count:state.count-10
  };
}
case "ADD_VALUE5":{
  return {
  ...state,
  count:state.count+5
};
}
case "SUB_VALUE5":{
  return {
  ...state,
  count:state.count-5
};
}
case "RESET_VALUE":{
  return {
  ...state,
  count:0
};
}
    default: return state;
  }
};

const store=createStore(mainReducer,middlewares);

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
