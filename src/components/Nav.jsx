import { Link } from 'react-router-dom';
import logo from '../assets/images/more/logo1.png';


const Nav = () => {
    return (
        <header className="bg-[#382828] py-5 sticky top-0 z-50">
            <Link to='/' className='flex justify-center gap-5 text-white font-Rancho text-3xl items-center'>
                <img className='h-8 w-8' src={logo} alt="" />
                <h1 className='text-center'>Espresso Emporium</h1>
            </Link>
        </header>
    )
}

export default Nav
