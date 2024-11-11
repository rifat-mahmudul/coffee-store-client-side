import { Link } from "react-router-dom"
import { BsFillCupHotFill } from "react-icons/bs";
import './compo.css'
import { useEffect, useState } from "react";
import Coffee from "./Coffee";


const Coffees = () => {

    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/coffees')
        .then(res => res.json())
        .then(data => {
            setCoffees(data);
        })
    }, [])

    return (
        <section className="mt-16 mb-16 font-Railway bg-img min-h-[100vh]">
            <div className="text-center">
                <p className="text-gray-500">--- Sip & Savor ---</p>
                <h1 className="font-Rancho text-3xl font-bold mt-2 mb-2">Our Popular Products</h1>
                <Link to='/addCoffee'>
                    <button className="flex gap-2 mx-auto items-center bg-[#D2B48c] py-2 px-5 rounded-lg border-2 border-black font-Rancho font-semibold">Add Coffee <BsFillCupHotFill /></button>
                </Link>
            </div>


            <div className="max-w-[90%] sm:max-w-[1440px] sm:px-28 mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {coffees.map(coffee => <Coffee key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></Coffee>)}
            </div>
        </section>
    )
}

export default Coffees
