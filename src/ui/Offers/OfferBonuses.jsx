import React from 'react'
import Image from 'next/image'
import Fee_Bonuse from '@/../public/images/fee_bonuse.png'
import Delivery_Bonuse from '@/../public/images/delivery_bonuse.png'
import Smile from '@/../public/images/smile.png'
import Fav from '@/../public/images/fav.png'

function OfferBonuses() {
    return (
        <div className="w-full">
            <div className="du_container min-h-27 mb-4 flex h-full w-full flex-col items-center justify-evenly gap-6 rounded-xl border border-stone-200 bg-stone-100 p-4 pt-3 sm:flex-row sm:items-start sm:gap-2 lg:items-center">
                <div className="justyfy-between flex flex-row items-start gap-3 sm:flex-col sm:items-center lg:flex-row lg:items-center lg:justify-center">
                    <div className="flex size-16 items-center justify-center rounded-[50%] border border-stone-300">
                        <div className="flex flex-col items-center justify-center text-[9px] font-bold leading-none tracking-tighter text-[#3e5aac]">
                            <div className="relative flex items-center justify-center text-center leading-none">
                                <Image
                                    src={Smile}
                                    alt="Smiley face icon"
                                    className="absolute left-[-10px] top-[-2px] w-[12px] tracking-[-0.75px]"
                                />
                                <p>the</p>
                            </div>
                            <p className="relative leading-none tracking-[-0.75px]">
                                ENTERTAINER{' '}
                                <sup className="absolute right-[-4px] top-[1px] text-[3px]">
                                    TM
                                </sup>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-1 text-left sm:items-center sm:text-center lg:items-start lg:text-left">
                        <p className="mb-1 mt-1 w-full max-w-[120px] rounded-lg bg-gradient-to-r from-[#652caa] via-[#c700b1] to-[#c700b1] px-1 pt-[1px] text-center text-xs text-white">
                            Limited time offer
                        </p>
                        <h4 className="text-sm font-semibold">
                            The Entertainer App on us
                        </h4>
                        <p className="text-xs text-gray-600">
                            12 month membership with new Power Plans.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row items-start justify-between gap-3 sm:flex-col sm:items-center lg:flex-row lg:items-center lg:justify-center">
                    <div className="flex size-16 items-center justify-center rounded-[50%] border border-stone-300">
                        <Image
                            src={Delivery_Bonuse}
                            alt="fee bonuse icon"
                            className="h-auto w-full max-w-[40px]"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-1 text-left sm:items-center sm:text-center lg:items-start lg:text-left">
                        <div className="flex h-[17px] w-full max-w-[140px] items-center justify-center rounded-xl bg-gradient-to-r from-[#142044] via-[#652caa] to-[#00a9ce] text-center text-xs">
                            <Image src={Fav} alt="Star icon" className="w-5" />
                            <div className="mr-[1px] flex h-[15px] w-48 items-center justify-center rounded-l-none rounded-r-3xl bg-white pr-[2px] pt-[1px] text-xs font-semibold tracking-tighter">
                                <p className="color-gradient rounded-[16px]">
                                    Greater value online
                                </p>
                            </div>
                        </div>
                        <h4 className="text-sm font-semibold">
                            FREE 1 hour delivery
                        </h4>
                        <p className="text-xs text-gray-600">
                            Orders in Dubai, placed between 10am-7pm.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row items-start justify-between gap-3 sm:flex-col sm:items-center lg:flex-row lg:items-center lg:justify-center">
                    <div className="flex size-16 items-center justify-center rounded-[50%] border border-stone-300">
                        <Image
                            src={Fee_Bonuse}
                            alt="fee bonuse icon"
                            className="w-full max-w-[40px]"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-1 text-left sm:items-center sm:text-center lg:items-start lg:text-left">
                        <h4 className="text-sm font-semibold">
                            No activation fee
                        </h4>
                        <p className="text-xs text-gray-600">
                            Save AED 125 on all new Power Plan activations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferBonuses
