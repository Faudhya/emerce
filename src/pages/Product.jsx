import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../features/counter/productslice";

function Product() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const product = useSelector((state) => state.product.product);

    useEffect(() => {
        dispatch(getProductById(id));
    }, []);
    return (
        <div className="container main-container d-flex">
            <div className="row mt-3">
                <div className="col-12">
                    <img style={{ width: "100%" }} src={product.productImage} />
                </div>
            </div>
            <div className="col-6 d-flex flex-column mt-3">
                <b className="mb-2">{product.productName}</b>
                <h5 className="mb-2">Price: {product.price} /Each</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit, facere architecto. Veniam, voluptate. Iste officiis
                    expedita qui quas aut, consectetur, magni tempore
                    doloremque, quos enim numquam ratione. Accusamus deserunt,
                    at, quia debitis iusto molestias non aliquid saepe sequi
                    adipisci delectus porro modi cum, ad eos velit repellat
                    earum expedita iure!
                </p>
                <button className="btn btn-success mt-3 addtocart-product-btn d-flex">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-cart-check-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                    <span className="ml-2">Add To Cart</span>
                </button>
            </div>
        </div>
    );
}

export default Product;
