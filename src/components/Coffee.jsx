/* eslint-disable react/prop-types */
import { IoEyeSharp } from "react-icons/io5";
import { FaPen } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";


const Coffee = ({coffee}) => {

    const {_id, name, chef, photoURL, price} = coffee;

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                


                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method : 'DELETE'
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your coffee has been deleted.",
                            icon: "success"
                        });
                    }
                })           
            }
        });
    }

    return (
        <div className="bg-[#f4f3f097] p-4 rounded-lg font-Railway lg:flex justify-between items-center cursor-pointer hover:border-2 hover:border-[#382828] transition hover:scale-105 shadow-lg">
            
            <div>
                <img className="h-[200px]" src={photoURL} alt="" />
            </div>

            <div>
                <p><span className="font-semibold">Name : </span>{name}</p>
                <p><span className="font-semibold mt-2 mb-2">Chef : </span>{chef}</p>
                <p><span className="font-semibold">Price : </span>{price}</p>
            </div>

            <div className="flex items-center gap-3 lg:block">
                <button className="bg-[#f4bf21] h-8 w-8 flex items-center justify-center text-xl text-white">
                    <IoEyeSharp></IoEyeSharp>
                </button>

                <button className="bg-[black] h-8 w-8 flex items-center justify-center text-xl text-white mt-3 mb-3">
                    <FaPen></FaPen>
                </button>
                
                <button onClick={() => {handleDelete(_id)}} className="bg-[red] h-8 w-8 flex items-center justify-center text-xl text-white">
                    <MdDeleteForever></MdDeleteForever>
                </button>
            </div>

        </div>
    )
}


export default Coffee
