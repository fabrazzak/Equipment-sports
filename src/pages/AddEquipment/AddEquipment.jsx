import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2'
import { AuthContext } from '../../component/AuthProvider/AuthProvider';


// or via CommonJS

const AddEquipment = () => {
    const {user}=useContext(AuthContext)


    const handleOnsubmit = (event) => {
        event.preventDefault();

        const form = event.target;       
        

        const product = {
            userName: user?.displayName,
            userEmail:user?.email,
            itemName: form.name.value,
            categoryName: form.category.value,
            description: form.description.value,
            price: form.price.value,
            rating: form.rating.value,
            customization: form.customization.value,
            processingTime: form.processing.value,
            stockStatus: form.stock.value,
            image: form.image.value,

        };

        if(product.rating>5){
            return toast(<p className='alert alert-error'>"Rating must be less then or equal 5"</p>)
        }

        // Make the POST request using fetch
        fetch('http://localhost:5000/create-product', {
            method: 'POST', // HTTP method
            headers: {
                'Content-Type': 'application/json', // Send JSON data
            },
            body: JSON.stringify(product), // Convert the object to a JSON string
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                form.reset(); 

                
                data.insertedId ? 
                                
                    Swal.fire({
                       
                        icon: 'success',
                        title: 'Product Added!',
                        text: 'Your product has been added successfully.',
                        confirmButtonText: 'OK',
                        
                    })
                  :
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed to Add Product',
                        text: result.message || 'Something went wrong. Please try again.',
                        confirmButtonText: 'Retry',
                    });
             
            })


    };




    return (
        <div>



            <div className=" md:w-6/12 md:mx-auto  mx-6  content-center  min-h-screen">
                <div className=" flex-col ">
                    <h2 className='section-title text-center md:text-4xl text-2xl font-bold py-10'>Categories</h2>

                    <div className="card bg-base-100     shrink-0 shadow-2xl">
                        <form onSubmit={handleOnsubmit} className="card-body grid grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" value={user?.displayName} disabled readOnly name="user-name" placeholder="User Name" className="input input-bordered" required />
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input type="email" name="user-email" value={user?.email} readOnly disabled placeholder="User Email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Product Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category Name</span>
                                </label>
                                <input type="text" name="category" placeholder="Category Name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name="description" placeholder="Description" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name="price" placeholder="Price" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="number" name="rating" placeholder="Rating" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Customization</span>
                                </label>
                                <input type="text" name="customization" placeholder="Customization" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Processing Time</span>
                                </label>
                                <input type="text" name="processing" placeholder="Processing Time" className="input input-bordered" required />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Stock Status</span>
                                </label>
                                <input type="text" name="stock" placeholder="Processing Time" className="input input-bordered" required />
                            </div>
                          


                            <div className='col-span-2'>
                                <div className="form-control  ">
                                    <label className="label">
                                        <span className="label-text">Product Image Url</span>
                                    </label>
                                    <input type="text" name="image" placeholder="Product Image Url" className="input input-bordered" required />
                                </div>                                

                                <div className="form-control mt-6 bg-[]">
                                    <button className="btn font-bold text-lg border-0 border-b-4    border-[#272a33] hover:border-[#146c43]   text-white bg-[#146c43] hover:bg-[#272a33] ">Product Add </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default AddEquipment;