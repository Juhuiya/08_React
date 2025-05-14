"use client";

import {
  increment,
  decrement,
} from "@/components/chap03/slice/CreateAsyncThunk";
import { fetchUser } from "@/components/chap03/thunk/ThunkReducer";
import { useSelector, useDispatch } from "react-redux";

function Section01() {
  const state = useSelector((state) => state.counter);
  const userState = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <>
      <h1>CreateSlice</h1>
      <div>
        <p>Count : {state.value}</p>
        <button onClick={() => dispatch(increment)}>+</button>
        <button onClick={() => dispatch(decrement)}>-</button>
      </div>
      <div>
        <p>State : {userState.state}</p>
        <p>Date : {JSON.stringify(userState.data)}</p>
        <button onClick={() => dispatch(fetchUser())}>Fetch User</button>
      </div>
    </>
  );
}
export default Section01;
