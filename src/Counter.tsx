import React, { useReducer } from "react";

// declare state-->
const initialState = {
  count: 0,
};

// type of state -->
type initialStateType = {
  count: number;
};

// constant define --->
const INCREMENT = "INCREMENT";
const INCREMENTCOUNTBY5 = "INCREMENTCOUNTBY5";
const RESET = "RESET";
const DECREMENT = "DECREMENT";

// action type define -->
type IncrementActionType = {
  type: typeof INCREMENT;
};

type IncrementCountBy5ActionType = {
  type: typeof INCREMENTCOUNTBY5;
  payload: number;
};

type ResetActionType = {
  type: typeof RESET;
};

type DecrementActionType = {
  type: typeof DECREMENT;
};

type CounterActionTypes =
  | IncrementActionType
  | IncrementCountBy5ActionType
  | ResetActionType
  | DecrementActionType;

// reducer function and switch statement -->
const reducer = (state: initialStateType, action: CounterActionTypes) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case INCREMENTCOUNTBY5:
      return { count: state.count + action.payload };
    case RESET:
      return { count: 0 };
    case DECREMENT:
      return { count: state.count - 1 };

    default:
      throw new Error();
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="counter_app">
      <h1>Count : {state.count}</h1>
      <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: INCREMENTCOUNTBY5, payload: 5 })}>
        IncrementCountBy5
      </button>
      <button onClick={() => dispatch({ type: RESET })}>Reset</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
    </div>
  );
};

export default Counter;
