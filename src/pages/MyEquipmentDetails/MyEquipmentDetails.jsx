import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import { AuthContext } from '../../component/AuthProvider/AuthProvider';
import { useParams } from 'react-router-dom';

const MyEquipmentDetails = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();

    const handleOnSubmit = (event) => {
        event.preventDefault();

        const form = event.target;

        const product = {
            userName: user?.displayName,
            userEmail: user?.email,
            name: form.name.value,
            category: form.category.value,
            description: form.description.value,
            price: parseFloat(form.price.value),
            rating: parseFloat(form.rating.value),
            customization: form.customization.value,
            processing: form.processing.value,
            stock: form.stock.value,
            image: form.image.value,
        };

        if (product.rating > 5) {
            return toast.error("Rating must be less than or equal to 5!");
        }

        // Make the PUT request using fetch
        fetch(`http://localhost:5000/my-product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Product Updated!',
                        text: 'Your product has been updated successfully.',
                        confirmButtonText: 'OK',
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Update Failed',
                        text: 'No changes detected or update failed. Please try again.',
                        confirmButtonText: 'Retry',
                    });
                }
            })
            .catch((error) => {
                console.error("Error updating product:", error);
                toast.error("An error occurred while updating the product. Please try again.");
            });
    };

    return (
        <div className="min-h-screen mx-6 md:w-6/12 md:mx-auto">
            <h2 className="text-center text-2xl md:text-4xl font-bold py-10">Update Equipment</h2>

            <div className="card bg-base-100 shadow-2xl">
                <form onSubmit={handleOnSubmit} className="card-body grid grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input
                            type="text"
                            value={user?.displayName || ''}
                            readOnly
                            className="input input-bordered"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input
                            type="email"
                            value={user?.email || ''}
                            readOnly
                            className="input input-bordered"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Product Name"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category Name</span>
                        </label>
                        <input
                            type="text"
                            name="category"
                            placeholder="Category Name"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input
                            type="number"
                            name="rating"
                            placeholder="Rating"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>
                        <input
                            type="text"
                            name="customization"
                            placeholder="Customization"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Processing Time</span>
                        </label>
                        <input
                            type="text"
                            name="processing"
                            placeholder="Processing Time"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Stock Status</span>
                        </label>
                        <input
                            type="text"
                            name="stock"
                            placeholder="Stock Status"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="col-span-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Image URL</span>
                            </label>
                            <input
                                type="text"
                                name="image"
                                placeholder="Product Image URL"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                className="btn font-bold text-lg text-white bg-[#146c43] hover:bg-[#272a33] border-0 border-b-4 border-[#272a33] hover:border-[#146c43]"
                            >
                                Update Product
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default MyEquipmentDetails;
