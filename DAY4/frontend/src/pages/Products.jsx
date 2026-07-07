import { useEffect, useState } from "react";
import API from "../services/api";
import ProductForm from "../components/ProductForm";

function Products() {

    const [products, setProducts] = useState([]);

    const [editingId, setEditingId] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: "",
        quantity: ""
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {

        try {

            const res = await API.get("/products");

            setProducts(res.data.data);

        } catch (error) {

            console.log(error);

        }

    }

    function handleChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            if (editingId) {

                await API.put(`/products/${editingId}`, formData);

            } else {

                await API.post("/products", formData);

            }

            setFormData({
                name: "",
                price: "",
                category: "",
                quantity: ""
            });

            setEditingId(null);

            fetchProducts();

        } catch (error) {

            console.log(error);

        }

    }

    function handleEdit(product) {

        setEditingId(product._id);

        setFormData({
            name: product.name,
            price: product.price,
            category: product.category,
            quantity: product.quantity
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    async function handleDelete(id) {

        if (!window.confirm("Delete this product?")) return;

        try {

            await API.delete(`/products/${id}`);

            fetchProducts();

        } catch (error) {

            console.log(error);

        }

    }

    return (

        <div className="container">

            <h1>Product Management</h1>

            <ProductForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                editingId={editingId}
            />

            <table>

                <thead>

                    <tr>

                        <th>Name</th>

                        <th>Price</th>

                        <th>Category</th>

                        <th>Quantity</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        products.length === 0 ?

                            <tr>

                                <td colSpan="5">
                                    No Products Found
                                </td>

                            </tr>

                            :

                            products.map((product) => (

                                <tr key={product._id}>

                                    <td>{product.name}</td>

                                    <td>₹ {product.price}</td>

                                    <td>{product.category}</td>

                                    <td>{product.quantity}</td>

                                    <td>

                                        <button
                                            onClick={() => handleEdit(product)}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => handleDelete(product._id)}
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default Products;