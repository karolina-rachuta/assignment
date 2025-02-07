import React from 'react'

function Filters() {
    return (
        <div className="flex flex-col items-start justify-evenly gap-6 lg:flex-row lg:justify-start">
            <p className="pt-1 text-xs text-stone-500">Show plans with:</p>
            <div className="flex flex-col justify-start gap-2 border-r-[1px] border-stone-300 pr-6">
                <label
                    htmlFor="flexi_minutes"
                    className="flex cursor-pointer gap-2 text-sm"
                >
                    <input type="radio" id="flexi_minutes" />
                    Flexi minutes (national & int&apos;l)
                </label>

                <label
                    htmlFor="national_minutes"
                    className="flex cursor-pointer gap-2 text-sm"
                >
                    <input type="radio" id="national_minutes" />
                    National minutes
                </label>
            </div>
            <div className="flex flex-col justify-start gap-2">
                <label
                    className="flex cursor-pointer gap-2 text-sm"
                    htmlFor="12_month_contract"
                >
                    <input type="radio" id="12_month_contract" />
                    12-month contract
                </label>

                <label
                    htmlFor="no_contract"
                    className="flex cursor-pointer gap-2 text-sm"
                >
                    <input type="radio" id="no_contract" />
                    No contract
                </label>
            </div>
            <button className="border-[1px] border-stone-400 bg-white px-2 py-[1px] text-[13px] text-primaryColor">
                Hide filters
            </button>
        </div>
    )
}

export default Filters
