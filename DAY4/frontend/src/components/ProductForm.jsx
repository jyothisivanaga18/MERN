function ProductForm({
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
                placeholder="Enter Product Name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="price"
                placeholder="Enter Price"
                value={formData.price}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="category"
                placeholder="Enter Category"
                value={formData.category}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="quantity"
                placeholder="Enter Quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
            />

            <button type="submit">
                {editingId ? "Update Product" : "Add Product"}
            </button>

        </form>
    );
}

export default ProductForm;