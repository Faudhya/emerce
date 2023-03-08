import React from "react";

function Cart() {
    return (
        <div className="main-container">
            <div className="container text-center mb-3">
                <h1 className="cart-title">Cart</h1>
            </div>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
            <div className="container text-center mt-3">
                <button className="btn btn-success">Checkout</button>
            </div>
        </div>
    );
}

export default Cart;
