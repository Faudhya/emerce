import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    randomNumber,
} from "../features/counter/counterslice";

function Counter() {
    //useSelector digunakan untuk mengakses global state
    //useDispatch digunakan untuk mengakses action
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div className="container text-center mt-4">
            <div>Counter {count}</div>
            {/* dispatch di akses dari features counterslice */}
            <button
                class="btn-primary btn counter-btn"
                onClick={() => dispatch(increment())}
            >
                Increase
            </button>
            <button
                class="btn-danger btn counter-btn ml-2 mr-2"
                onClick={() => dispatch(decrement())}
            >
                Decrease
            </button>
            <button
                class="btn-warning btn counter-btn"
                onClick={() => dispatch(randomNumber())}
            >
                Random
            </button>
        </div>
    );
}

export default Counter;
