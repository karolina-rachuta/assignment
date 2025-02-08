'use client'
import React, { useState } from 'react'

function Filters({ isHidden, setIsHidden }) {
    const [selectedMinutes, setSelectedMinutes] = useState('')
    const [selectedContract, setSelectedContract] = useState('')
    return (
        <div className="flex flex-col items-start justify-evenly gap-6 sm:flex-row lg:justify-start">
            <div
                className={`flex flex-col items-start justify-evenly gap-2 sm:flex-row lg:justify-start lg:gap-6 ${isHidden ? 'hidden' : 'block'}`}
            >
                <p className="pt-1 text-xs text-stone-500">Show plans with:</p>
                <div className="flex flex-col justify-start gap-2 pr-3 sm:border-r-[1px] sm:border-stone-300">
                    <label
                        htmlFor="flexi_minutes"
                        className={`flex cursor-pointer gap-2 text-sm ${selectedMinutes === 'flexi' && 'font-bold'}`}
                    >
                        <input
                            type="radio"
                            id="flexi_minutes"
                            name="flexi_minutes"
                            value="flexi"
                            checked={selectedMinutes === 'flexi'}
                            onChange={(e) => setSelectedMinutes(e.target.value)}
                            className="h-5 w-5"
                        />
                        Flexi minutes (national & int&apos;l)
                    </label>

                    <label
                        htmlFor="national_minutes"
                        className={`flex cursor-pointer gap-2 text-sm ${selectedMinutes === 'national' && 'font-bold'}`}
                    >
                        <input
                            type="radio"
                            id="national_minutes"
                            name="national_minutes"
                            value="national"
                            className="h-5 w-5"
                            checked={selectedMinutes === 'national'}
                            onChange={(e) => setSelectedMinutes(e.target.value)}
                        />
                        National minutes
                    </label>
                </div>
                <div className="flex flex-col justify-start gap-2">
                    <label
                        className={`flex cursor-pointer gap-2 text-sm ${selectedContract === '12_month' && 'font-bold'}`}
                        htmlFor="12_month_contract"
                    >
                        <input
                            type="radio"
                            id="12_month_contract"
                            name="contract"
                            value="12_month"
                            className="h-5 w-5"
                            checked={selectedContract === '12_month'}
                            onChange={(e) =>
                                setSelectedContract(e.target.value)
                            }
                        />
                        12-month contract
                    </label>

                    <label
                        htmlFor="no_contract"
                        className={`flex cursor-pointer gap-2 text-sm ${selectedContract === 'no_contract' && 'font-bold'}`}
                    >
                        <input
                            type="radio"
                            id="no_contract"
                            name="contract"
                            value="no_contract"
                            className="h-5 w-5"
                            checked={selectedContract === 'no_contract'}
                            onChange={(e) =>
                                setSelectedContract(e.target.value)
                            }
                        />
                        No contract
                    </label>
                </div>
            </div>
            <button
                className="min-w-[100px] border-[1px] border-stone-400 bg-white px-2 py-[1px] text-[13px] text-primaryColor"
                onClick={() => setIsHidden((prev) => !prev)}
            >
                {isHidden ? 'Open filters' : 'Hide filters'}
            </button>
        </div>
    )
}

export default Filters
