import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { NavLink, Link } from "react-router-dom";
import {useAuthValue} from "../../context";
import { api } from "../../api";

export default function Header(){

    const {auth, setAuth} = useAuthValue();
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    function handleLogout(){
        api.get('/api/users/logout', {headers: {Authorization: `Bearer ${auth.token}`}});

        localStorage.removeItem('auth');

        setAuth(null);
    }

    return (
        <header className="bg-white sticky top-0 border-b px-5 py-3">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to={'/'} className="text-5xl text-green-550 logo ml-5">منجز</Link>
                        <ul className="mr-10 hidden md:block">
                            <li className="inline-block ml-7"><NavLink to={'/'} className={`inline-block px-5 py-3 rounded-2xl hover:active text-gray-500`}>الرئيسية</NavLink></li>
                            {auth && <li className="inline-block ml-7"><NavLink to={'/profile'} className="inline-block px-5 py-3 rounded-2xl hover:active text-gray-500">حسابي</NavLink></li>}
                        </ul>
                    </div>
                    <div className="hidden md:block">
                        {auth
                        ?
                            (
                            <>
                                <button onClick={() => handleLogout()} className="text-gray-500 hover:text-red-500">تسجيل الخروج </button>
                            </>
                            )
                        :
                            (
                                <>
                                    <Link to="/login" className="text-gray-500 hover:text-green-550">تسجيل الدخول</Link>
                                    <Link to="/register" className="btn1 mr-5">انشاء حساب</Link>
                                </>
                            )
                        }
                    </div>
                    <button className="block md:hidden text-2xl" onClick={() => setShowMobileMenu(!showMobileMenu)}><FontAwesomeIcon icon={faBars} /></button>
                </div>
            </div>
            {showMobileMenu &&
                <div className="absolute top-16 right-14 w-10/12 bg-white border border-solid rounded-2xl px-4 py-3">
                    <div className="flex justify-between">
                        <ul>
                            <li className="block mb-5"><Link to="/" className="block px-3 py-3 rounded text-gray-500">الرئيسية</Link></li>
                            {auth && <li className="block mb-5"><Link to="/profile" className="block px-3 rounded py-3 text-gray-500">حسابي</Link></li>}
                        </ul>
                        <div>
                            <button className="block md-hidden text-2xl mr-auto" onClick={() => setShowMobileMenu(!showMobileMenu)}><FontAwesomeIcon icon={faXmark} /></button>
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center pt-3">
                        {auth
                            ?
                            (
                                <>
                                    <button onClick={() => handleLogout()} className="text-gray-500 hover:text-green-550">تسجيل الخروج</button>
                                </>
                            )
                            :
                            (
                                <>
                                    <Link to="/login" className="text-gray-500 hover:text-green-550">تسجيل الدخول</Link>
                                    <Link to="/register" className="inline-block bg-green-550 text-white px-5 py-2 rounded-3xl hover:bg-green-700 mr-5">انشاء حساب</Link>
                                </>
                            )
                        }
                    </div>
                </div>
            }
        </header>
    );
}