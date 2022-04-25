import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

const alertCondition = true;

function reducer2(state = alertCondition, action) {
  if (action.type === "close") {
    state = !state;
  } else if (action.type === "open") {
    state = !state;
  }
  return state;
}

const startValue = [
  { id: 0, name: "에어 포스 1 07", quan: 5 },
  { id: 1, name: "뉴발란스 MR530SG", quan: 0 },
  { id: 2, name: "반스 올드스쿨", quan: 10 },
];

const reducer = (state = startValue, action) => {
  if (action.type === "항목추가") {
    const copy = [...state];
    copy.push(action.payload);
    return copy;
  } else if (action.type === "increase") {
    const copy = [...state];
    copy[0].quan++;
    return copy;
  } else if (action.type === "decrease") {
    const copy = [...state];
    copy[0].quan--;
    if (copy[0].quan <= 0) {
      copy[0].quan = 0;
    }
    return copy;
  } else {
    return state;
  }
};

const store = createStore(combineReducers({ reducer, reducer2 }));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
