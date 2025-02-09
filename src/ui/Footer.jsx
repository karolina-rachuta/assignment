import React from 'react'

function Footer() {
    return (
        <footer className="w-full border-t-[2px] border-gray-300 bg-stone-100 py-10">
            <div className="du_container flex flex-col items-center justify-between gap-2 px-2 md:flex-row md:px-4 lg:px-2">
                <div className="flex gap-2">
                    <a
                        href="#"
                        className="flex h-3 items-center border-r-[2px] border-stone-400 pr-2 text-xs"
                    >
                        Site map
                    </a>
                    <a
                        href="#"
                        className="flex h-3 items-center border-r-[2px] border-stone-400 pr-2 text-xs"
                    >
                        Terms & conditions
                    </a>
                    <a href="#" className="flex h-3 items-center text-xs">
                        Privacy policy
                    </a>
                </div>
                <div className="text-xs">
                    &copy; Copyright 2020 EITC. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
