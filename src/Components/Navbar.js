import logo from '../logo.svg';
import { Routes, Route,Link } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
function Navbar() {
    return (
        <>
            <div className=' bg-gray-100 w-[100vw] flex flex-row p-4'>
                <div className='flex items-center'>
                    <img src={logo} alt="logo" height={70} width={70} />
                    <h1 className='text-2xl font-semibold text-blue-400'>MyCompany</h1>
                </div>
                <div className='flex justify-end items-center w-screen sm:mr-10'>
                    <ul className='flex space-x-4 font-semibold text-xl 
                text-blue-400 hover:cursor-pointer '>
                        <li className='hover:text-cyan-500 hover:animate-bounce'><Link to='/'>Home</Link></li> &nbsp;&nbsp; |
                        <li className='hover:text-cyan-500 hover:animate-bounce'><Link to='/about'>About</Link></li> &nbsp;&nbsp; |
                        <li className='hover:text-cyan-500 hover:animate-bounce'><Link to='/contact'>Contact Us</Link></li> &nbsp;&nbsp;|
                    </ul>
                </div>
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about/' element={<About/>}/>
                <Route path='contact/' element={<Contact />} />
            </Routes>
        </>
    );
}

export default Navbar;