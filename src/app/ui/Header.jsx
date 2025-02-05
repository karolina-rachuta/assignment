'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/../public/logo.png';
import Magnifier from '@/../public/magnifier.png';
import Basket from '@/../public/basket.png';
import Close from '@/../public/close.png';
import BasketMobile from '@/../public/basket-white.png';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    function handleMenu() {
        setIsOpen((prev) => !prev);
        console.log(isOpen);
    }

    return (
        <header className="flex items-center flex-col w-full">
            <div className="du_nav flex items-center justify-center">
                <div
                    className="du_container w-full du_nav-top flex justify-between items-center text-white
"
                >
                    <div className="flex justify-between items-center gap-3">
                        <a href="" className="active">
                            Consumer
                        </a>
                        <a href="" className="opacity-50">
                            Business
                        </a>
                    </div>
                    <div className="flex justify-between items-center gap-3 m-2">
                        <a href="">
                            <Image
                                src={Magnifier}
                                alt="Search"
                                className="icon"
                                width="40"
                                height="40"
                            />
                        </a>
                        <a href="">
                            <span className="text-xs">A</span>A
                        </a>
                        <a href=""> عربى</a>
                    </div>
                </div>
            </div>

            <div className="du_nav-bottom du_container flex flex-col items-center justify-between gap-6 w-full lg:flex-row lg:justify-start">
                <div className="flex items-center justify-between gap-2 w-full lg:w-12 p-2 pt-5 lg:pt-2">
                    <Link href="https://du.ae/">
                        <Image
                            className="logo"
                            src={Logo}
                            alt="Logo du"
                            width="50"
                            height="50"
                        />
                    </Link>
                    {isOpen ? (
                        <Image
                            src={Close}
                            className="icon"
                            alt="Close menu"
                            width="40"
                            height="40"
                            onClick={handleMenu}
                        />
                    ) : (
                        <div
                            className="hamburger lg:hidden cursor-pointer"
                            onClick={handleMenu}
                        >
                            <span className="hamburger-line"></span>
                            <span className="hamburger-line"></span>
                            <span className="hamburger-line"></span>
                        </div>
                    )}
                </div>
                <nav
                    className={` ${isOpen ? 'flex' : 'hidden'} mobile-menu lg:desktop-menu lg:flex flex-col lg:flex-row  items-center justify-between w-full gap-10`}
                >
                    <div className="flex flex-col lg:flex-row items-center text-center justify-between lg:gap-3 w-full lg:w-3/5">
                        <a href="" className="mobile-link lg:desktop-link">
                            Devices
                        </a>
                        <a href="" className="mobile-link lg:desktop-link">
                            Mobile Plans
                        </a>
                        <a href="" className="mobile-link lg:desktop-link">
                            Internet & TV
                        </a>
                        <a href="" className="mobile-link lg:desktop-link">
                            Smart Home
                        </a>
                        <a href="" className="mobile-link lg:desktop-link">
                            Why du
                        </a>
                        <a href="" className="mobile-link lg:desktop-link">
                            Help
                        </a>
                    </div>

                    <div className="flex flex-col lg:flex-row  items-center justify-between lg:gap-2 w-full lg:w-2/5 text-center lg:m-2">
                        <a href="" className="mobile-link lg:desktop-link">
                            Quick Pay
                        </a>
                        <a href="" className="mobile-link lg:desktop-link">
                            Rechange
                        </a>
                        <a href="" className="mobile-link lg:desktop-link">
                            Renew ID
                        </a>

                        <a
                            href=""
                            className="lg:hidden mobile-link flex justify-center lg:desktop-link"
                        >
                            <Image
                                src={BasketMobile}
                                alt="Search"
                                className="icon"
                                width="40"
                                height="40"
                            />
                        </a>

                        <a href="" className="hidden lg:block lg:desktop-link">
                            <Image
                                src={Basket}
                                alt="Search"
                                className="icon"
                                width="40"
                                height="40"
                            />
                        </a>

                        <a href="" className="mobile-link lg:desktop-link">
                            Login
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
