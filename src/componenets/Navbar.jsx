import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import menubar from '../images/menu.svg'
import Popupmenue from './Popupmenue';
const Navbar = ({ navlinks }) => {
    const [popupState, setPopupState] = useState(false);
    const [navState, setNavState] = useState(false);

    const onTriggerPopup = () => {
        setPopupState(!popupState);
        // console.log(popupState);
    }

    const navScroll = () => {
        if (window.scrollY > 180) {
            setNavState(true);
        }
        else {
            setNavState(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', navScroll);
        return () => {
            window.removeEventListener('scroll', navScroll)
        }
    }, [])

    return (
        <>
            <header className={`nav-default ${navState && 'nav-sticky'}`}>
                <nav className='flex items-center justify-between infravel-container'>
                    <NavLink to={'/'} className='flex items-center'>
                        <img src={logo} alt='logo/img' className='w-22 h-11 object-fill' />
                    </NavLink>
                    <ul className='flex items-center lg:hidden gap-7'>
                        {/* {navlinks?.map((val, i) => (<li key={i}><NavLink to={'#'} className="text-lg text-slate-900">{val.link}</NavLink></li>))} */}
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/explore">Explore</NavLink></li>
                        <li><NavLink to="/pricing">Pricing</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <ul className='flex items-center lg:hidden'>
                        <li><button type='button' className='button-emrald px-7 text-base'>Join Us</button></li>
                    </ul>
                    <ul className='hidden lg:flex items-center'>
                        <li><button type='button' className='flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer' onClick={onTriggerPopup}><img src={menubar} alt='menu/svg' className='object-cover shadow-sm filter' /></button></li>
                    </ul>
                </nav>
            </header>
            <Popupmenue navlinks={navlinks} popupState={popupState} />
        </>
    )
}

export default Navbar;
