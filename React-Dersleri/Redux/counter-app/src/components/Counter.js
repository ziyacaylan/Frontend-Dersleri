import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/counter/counterSlice";

function Counter() {
  const [amount, setAmount] = useState(3);
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  //console.log(countValue);
  return (
    <div className="container">
      <h1>Counter</h1>
      <div>
        <div className="count-content">
          <h1 className="counterNum">{countValue}</h1>
        </div>
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-increment"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="btn btn-decrement"
        >
          Increment
        </button>

        <br />
        <br />
        <label htmlFor="number" className="count-value">
          Amount :
        </label>
        <input
          type="number"
          name="number"
          className="nums"
          defaultValue={0}
          onChange={(event) => setAmount(Number(event.target.value))}
        />
        <div>
          <button
            className="btn btn-inc-by-amount"
            onClick={() => dispatch(incrementByAmount(amount))}
          >
            Increment By Amount
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
