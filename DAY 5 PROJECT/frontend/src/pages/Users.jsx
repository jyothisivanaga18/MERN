import { useEffect, useState } from "react";
import API from "../services/api";
import UserForm from "../components/UserForm";

function Users() {

    const [users, setUsers] = useState([]);

    const [editingId, setEditingId] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: ""
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {

        try {

            const res = await API.get("/users");

            setUsers(res.data.data);

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

                await API.put(`/users/${editingId}`, formData);

            } else {

                await API.post("/users", formData);

            }

            setFormData({
                name: "",
                email: "",
                age: ""
            });

            setEditingId(null);

            fetchUsers();

        } catch (error) {

            console.log(error);

        }

    }

    function handleEdit(user) {

        setEditingId(user._id);

        setFormData({
            name: user.name,
            email: user.email,
            age: user.age
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    async function handleDelete(id) {

        const confirmDelete = window.confirm(
            "Delete this user?"
        );

        if (!confirmDelete) return;

        try {

            await API.delete(`/users/${id}`);

            fetchUsers();

        } catch (error) {

            console.log(error);

        }

    }

    return (

        <div className="container">

            <h1>User Management</h1>

            <UserForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                editingId={editingId}
            />

            <table>

                <thead>

                    <tr>

                        <th>Name</th>

                        <th>Email</th>

                        <th>Age</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        users.length === 0 ?

                            (
                                <tr>

                                    <td colSpan="4">
                                        No Users Found
                                    </td>

                                </tr>
                            )

                            :

                            users.map((user) => (

                                <tr key={user._id}>

                                    <td>{user.name}</td>

                                    <td>{user.email}</td>

                                    <td>{user.age}</td>

                                    <td>

                                        <button
                                            onClick={() =>
                                                handleEdit(user)
                                            }
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() =>
                                                handleDelete(user._id)
                                            }
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

export default Users;