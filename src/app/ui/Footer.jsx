import React from 'react'

function Footer() {
    return (
        <footer className="w-full border-t-[2px] border-gray-300 bg-stone-100 py-10">
            <div className="du_container flex items-center justify-between">
                <div className="flex gap-2">
                    <p className="flex h-3 items-center border-r-[2px] border-stone-400 pr-2 text-xs">
                        Site map
                    </p>
                    <p className="flex h-3 items-center border-r-[2px] border-stone-400 pr-2 text-xs">
                        Terms & conditions
                    </p>
                    <p className="flex h-3 items-center text-xs">
                        Privacy policy
                    </p>
                </div>
                <div className="text-xs">
                    &copy; Copyright 2020 EITC. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
