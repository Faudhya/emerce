import "./App.css";
import { Route, Routes } from "react-router-dom";
import Storage from "./pages/Storage";
import Counter from "./pages/Counter";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Navbar from "./components/navbar";
import Cart from "./pages/Cart";

export default function App() {
    return (
        <div className="container-fluid p-0">
            <Navbar />
            <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/storage" element={<Storage />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
}
