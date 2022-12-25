import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };

    case "DECREMENT":
      return { value: state.value - 1 };

    default:
      return state;
  }
}

const Counter = () => {
  // const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <>
      <p>
        현재 카운터 값은 <b>{state.value} 이네요.</b>
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+ 1 증가</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>- 1 감소</button>
    </>
  );
};

export default Counter;
