import { IoArrowBack } from "react-icons/io5"
import { Link, useLoaderData, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const {photoURL, chef, name, price, taste, category, supplier, _id } = coffee;
    const navigate = useNavigate();

    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;

        const updateCoffeeInfo = {
            name,
            supplier,
            category,
            chef,
            taste,
            price,
            photoURL
        }


        fetch(`http://localhost:5000/coffees/${_id}`,{
            method : "PUT",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(updateCoffeeInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    icon: "success",
                    title: "Coffee updated successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            }
            form.reset();
        })
    }

    return (
        <div className="max-w-[90%] xl:max-w-[1000px] mx-auto mb-16 font-Railway">
            <Link to='/' className="font-Rancho flex gap-2 items-center mt-8 mb-8 text-xl"><IoArrowBack></IoArrowBack> Back to Home</Link>

            <div className="w-full bg-[#F4F3F0] font-Railway p-10 rounded-xl">
                
                <h1 className="text-center font-Rancho text-3xl font-bold">Update Existing Coffee Details</h1>
                <p className="text-center sm:max-w-3xl mx-auto mt-3 text-gray-600">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                <form className="mt-8" onSubmit={handleUpdateCoffee}>

                    <div className="sm:flex items-center justify-between font-Railway">
                        <div className="sm:w-[49%]">
                            
                            <div>
                                <h3 className="font-semibold mb-3">Name : </h3>
                                <input defaultValue={name} className="w-full p-3 rounded-lg" type="text" name="name" id="name" placeholder="Enter coffee name" />
                            </div>
                            
                            <div>
                                <h3 className="font-semibold mb-3 mt-4">Supplier : </h3>
                                <input defaultValue={supplier} className="w-full p-3 rounded-lg" type="text" name="supplier" id="supplier" placeholder="Enter coffee supplier" />
                            </div>
                            
                            <div>
                                <h3 className="font-semibold mb-3 mt-4">Category : </h3>
                                <input defaultValue={category} className="w-full p-3 rounded-lg" type="text" name="category" id="category" placeholder="Enter coffee category" />
                            </div>

                        </div>

                        <div className="sm:w-[49%]">
                            
                            <div>
                                <h3 className="font-semibold mb-3">Chef : </h3>
                                <input defaultValue={chef} className="w-full p-3 rounded-lg" type="text" name="chef" id="chef" placeholder="Enter coffee chef" />
                            </div>
                            
                            <div>
                                <h3 className="font-semibold mb-3 mt-4">Taste : </h3>
                                <input defaultValue={taste} className="w-full p-3 rounded-lg" type="text" name="taste" id="taste" placeholder="Enter coffee Taste" />
                            </div>
                            
                            <div>
                                <h3 className="font-semibold mb-3 mt-4">price : </h3>
                                <input defaultValue={price} className="w-full p-3 rounded-lg" type="text" name="price" id="price" placeholder="Enter coffee Details" />
                            </div>

                        </div>
                    </div>

                    <div className="mb-2">
                        <h3 className="font-semibold mb-3 mt-4">photoURL : </h3>
                        <input defaultValue={photoURL} className="w-full p-3 rounded-lg" type="text" name="photoURL" id="photoURL" placeholder="Enter coffee Details" />
                    </div>
                    
                    <button type="submit" className="font-Rancho font-semibold text-xl w-full bg-[#D2B48c] text-center py-2 mt-4 rounded-lg hover:border-2 hover:border-[#382828]">Update Coffee</button>

                </form>

            </div>
        </div>
    )
}

export default UpdateCoffee
