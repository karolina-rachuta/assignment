'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/../public/images/logo.png'
import Magnifier from '@/../public/images/magnifier.png'
import Basket from '@/../public/images/basket.png'
import Close from '@/../public/images/close.png'
import BasketMobile from '@/../public/images/basket-white.png'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isConsumerWebsite, setIsConsumerWebsite] = useState(true)

    function handleMenu() {
        setIsOpen((prev) => !prev)
    }

    return (
        <header className="flex w-full flex-col items-center">
            <div className="du_nav flex items-center justify-center">
                <div className="du_container du_nav-top flex w-full items-center justify-between p-2 text-white">
                    <div className="flex items-center justify-between gap-3">
                        <a
                            href=""
                            className={`${isConsumerWebsite ? 'active' : 'opacity-50'} pl-2`}
                            onClick={(e) => {
                                e.preventDefault()
                                setIsConsumerWebsite(true)
                            }}
                        >
                            Consumer
                        </a>
                        <a
                            href=""
                            className={`${!isConsumerWebsite ? 'active' : 'opacity-50'}`}
                            onClick={(e) => {
                                e.preventDefault()
                                setIsConsumerWebsite(false)
                            }}
                        >
                            Business
                        </a>
                    </div>
                    <div className="m-2 flex items-center justify-between gap-3">
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

            <div className="du_nav-bottom du_container flex w-full flex-col items-center justify-between gap-6 lg:flex-row lg:justify-start">
                <div className="flex w-full items-center justify-between gap-2 p-2 pt-5 lg:w-12 lg:pt-2">
                    <Link href="https://du.ae/">
                        <Image
                            className="max-h-autp max-w-[40px] lg:max-w-[50px]"
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
                            className="hamburger cursor-pointer lg:hidden"
                            onClick={handleMenu}
                        >
                            <span className="hamburger-line"></span>
                            <span className="hamburger-line"></span>
                            <span className="hamburger-line"></span>
                        </div>
                    )}
                </div>
                <nav
                    className={` ${isOpen ? 'flex' : 'hidden'} mobile-menu lg:desktop-menu w-full flex-col items-center justify-between gap-10 lg:flex lg:flex-row`}
                >
                    <div className="flex w-full flex-col items-center justify-between text-center lg:w-[50%] lg:flex-row lg:gap-1">
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

                    <div className="flex w-full flex-col items-center justify-between text-center lg:m-2 lg:w-[38%] lg:flex-row lg:gap-1">
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
                            className="mobile-link lg:desktop-link flex justify-center lg:hidden"
                        >
                            <Image
                                src={BasketMobile}
                                alt="Basket"
                                className="icon"
                                width="40"
                                height="40"
                            />
                        </a>

                        <a
                            href=""
                            className="lg:desktop-link basket-icon relative hidden lg:block"
                        >
                            <Image
                                src={Basket}
                                alt="Basket"
                                className="icon basket-icon relative"
                                width="40"
                                height="40"
                            />
                        </a>

                        <a href="" className="mobile-link lg:login-border">
                            Login
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
