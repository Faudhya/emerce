import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/counter/productslice";
import ProductCard from "../components/ProductCard";

function Products() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.product.productList);

    const renderProductList = () => {
        return productList.map((product) => {
            return <ProductCard product={product} />;
        });
    };

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <div class="container d-flex main-container">
            <div class="row">{renderProductList()}</div>
        </div>
    );
}

export default Products;
