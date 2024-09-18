import React from 'react';
import {increment, decrement, clear, addTen} from "../redux/action";
import {useDispatch, useSelector} from "react-redux";

const CountPage = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.count)
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(clear())}>clear</button>
            <button onClick={() => dispatch(addTen())}>+10</button>
        </div>
    );
};

export default CountPage;