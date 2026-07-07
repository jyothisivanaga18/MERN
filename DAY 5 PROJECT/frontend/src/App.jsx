import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Users from "./pages/Users";
import Products from "./pages/Products";
import Orders from "./pages/Orders";

import "./App.css";

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <div className="page">

                <Routes>

                    <Route path="/" element={<Users />} />

                    <Route
                        path="/products"
                        element={<Products />}
                    />

                    <Route
                        path="/orders"
                        element={<Orders />}
                    />

                </Routes>

            </div>

        </BrowserRouter>
    );
}

export default App;