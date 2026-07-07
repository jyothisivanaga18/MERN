function UserForm({
    formData,
    handleChange,
    handleSubmit,
    editingId
}) {
    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="age"
                placeholder="Enter Age"
                value={formData.age}
                onChange={handleChange}
                required
            />

            <button type="submit">
                {editingId ? "Update User" : "Add User"}
            </button>

        </form>
    );
}

export default UserForm;