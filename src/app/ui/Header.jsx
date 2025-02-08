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
            <div className="du_nav flex w-full items-center justify-center">
                <div className="du_container flex h-[30px] w-full items-center justify-between p-2 px-2 text-[13px] font-[600] text-white md:px-4 lg:px-2">
                    <div className="flex items-center justify-between gap-3">
                        <a
                            href=""
                            className={`${isConsumerWebsite ? 'active' : 'opacity-80'} pl-2`}
                            onClick={(e) => {
                                e.preventDefault()
                                setIsConsumerWebsite(true)
                            }}
                        >
                            Consumer
                        </a>
                        <a
                            href=""
                            className={`${!isConsumerWebsite ? 'active' : 'opacity-80'}`}
                            onClick={(e) => {
                                e.preventDefault()
                                setIsConsumerWebsite(false)
                            }}
                        >
                            Business
                        </a>
                    </div>
                    <div className="m-2 flex items-center justify-between gap-6">
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

            <div className="du_container mx-[10px] flex min-h-[81px] w-full flex-col items-center justify-between gap-6 text-[15px] font-[500] lg:flex-row lg:justify-start lg:gap-10">
                <div className="flex w-full items-center justify-between gap-2 px-2 pt-5 md:px-4 lg:w-12 lg:px-2 lg:pt-0">
                    <Link href="#">
                        <Image
                            className="max-h-auto max-w-[40px] lg:max-w-[50px]"
                            src={Logo}
                            alt="Logo du"
                            width="50"
                            height="50"
                        />
                    </Link>
                    {isOpen ? (
                        <div className="hamburger cursor-pointer px-2 md:px-4 lg:hidden lg:px-2">
                            <Image
                                src={Close}
                                className="icon"
                                alt="Close menu"
                                width="40"
                                height="40"
                                onClick={handleMenu}
                            />
                        </div>
                    ) : (
                        <div
                            className="flex cursor-pointer flex-col gap-[4px] px-2 md:px-4 lg:hidden lg:px-2"
                            onClick={handleMenu}
                        >
                            <span className="h-[2px] w-[20px] rounded-[5px] bg-color"></span>
                            <span className="h-[2px] w-[20px] rounded-[5px] bg-color"></span>
                            <span className="h-[2px] w-[20px] rounded-[5px] bg-color"></span>
                        </div>
                    )}
                </div>
                <nav
                    className={` ${isOpen ? 'flex' : 'hidden'} mobile-menu lg:desktop-menu w-full flex-col items-center justify-between gap-10 lg:flex lg:flex-row`}
                >
                    <div className="order-2 flex w-full flex-col items-center justify-between text-center lg:order-1 lg:w-[50%] lg:flex-row lg:gap-1">
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

                    <div className="order-1 flex w-full flex-col items-center justify-between text-center lg:order-2 lg:m-2 lg:w-[38%] lg:flex-row lg:gap-1">
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
                            className="lg:desktop-link basket-icon relative hidden duration-300 ease-in-out hover:animate-bounce hover:border-b-transparent lg:block"
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
