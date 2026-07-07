import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">

            <h2>MERN CRUD</h2>

            <div className="links">

                <Link to="/">Users</Link>

                <Link to="/products">Products</Link>

                <Link to="/orders">Orders</Link>

            </div>

        </nav>
    );
}

export default Navbar;