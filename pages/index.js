import React from 'react'
import { increment, decrement } from '../store/count/countSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function Home() {
  const dispatch = useDispatch();
  const { count } = useSelector(state => state.count);
  return (
    <div>
      <h1>Simple implement Next.js With Redux Toolkit</h1>
      <h2>Counted: {count}</h2>
      <hr />
      <button onClick={() => dispatch(increment())}>Increment</button>
      &nbsp;
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  )
}