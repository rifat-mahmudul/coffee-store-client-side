/* eslint-disable react/no-unescaped-entities */
import './compo.css'

const Banner = () => {
    return (
        <section>
            <div className="banner-img min-h-[calc(100vh-60px)] flex items-center justify-center font-Railway">
                <div className='text-center'>
                    <h1 className='sm:text-5xl text-3xl font-bold font-Rancho text-white'>Would you like a Cup of Delicious Coffee?</h1>
                    <p className='sm:max-w-xl mt-3 mb-3 text-gray-300'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className='bg-[#D2B48c] hover:bg-[#d2b48cbe] transition font-semibold font-Rancho text-xl py-2 px-5 rounded-lg'>Learn More</button>
                </div>
            </div>
        </section>
    )
}

export default Banner
