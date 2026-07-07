import { useEffect, useState } from "react";
import API from "../services/api";
import OrderForm from "../components/OrderForm";

function Orders() {

    const [orders, setOrders] = useState([]);

    const [editingId, setEditingId] = useState(null);

    const [formData, setFormData] = useState({
        customerName: "",
        productName: "",
        quantity: ""
    });

    useEffect(() => {
        fetchOrders();
    }, []);

    async function fetchOrders() {

        try {

            const res = await API.get("/orders");

            setOrders(res.data.data);

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

                await API.put(`/orders/${editingId}`, formData);

            } else {

                await API.post("/orders", formData);

            }

            setFormData({
                customerName: "",
                productName: "",
                quantity: ""
            });

            setEditingId(null);

            fetchOrders();

        } catch (error) {

            console.log(error);

        }

    }

    function handleEdit(order) {

        setEditingId(order._id);

        setFormData({
            customerName: order.customerName,
            productName: order.productName,
            quantity: order.quantity
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    async function handleDelete(id) {

        if (!window.confirm("Delete this order?")) return;

        try {

            await API.delete(`/orders/${id}`);

            fetchOrders();

        } catch (error) {

            console.log(error);

        }

    }

    return (

        <div className="container">

            <h1>Order Management</h1>

            <OrderForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                editingId={editingId}
            />

            <table>

                <thead>

                    <tr>

                        <th>Customer</th>

                        <th>Product</th>

                        <th>Quantity</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        orders.length === 0 ?

                            <tr>

                                <td colSpan="4">
                                    No Orders Found
                                </td>

                            </tr>

                            :

                            orders.map((order) => (

                                <tr key={order._id}>

                                    <td>{order.customerName}</td>

                                    <td>{order.productName}</td>

                                    <td>{order.quantity}</td>

                                    <td>

                                        <button
                                            onClick={() => handleEdit(order)}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => handleDelete(order._id)}
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

export default Orders;