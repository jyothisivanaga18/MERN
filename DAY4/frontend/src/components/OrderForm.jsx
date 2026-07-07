function OrderForm({
    formData,
    handleChange,
    handleSubmit,
    editingId
}) {
    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                name="customerName"
                placeholder="Customer Name"
                value={formData.customerName}
                onChange={handleChange}
                required
            />

            <input
                type="text"
                name="productName"
                placeholder="Product Name"
                value={formData.productName}
                onChange={handleChange}
                required
            />

            <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
            />

            <button type="submit">
                {editingId ? "Update Order" : "Add Order"}
            </button>

        </form>
    );
}

export default OrderForm;