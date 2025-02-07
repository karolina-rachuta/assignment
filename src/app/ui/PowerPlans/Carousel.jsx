'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Tick from '@/../public/images/tick.png'

const powerPlans = [
    {
        id: 1,
        price: '125',
        plan: '125',
        data: '4',
        dataPromotion: '',
        dataType: 'National data',
        minutes: 100,
        minutePromotion: '',
        additions: [
            'No activation fee. Save AED 125',
            '4 GB free data on WiFi UAE'
        ],
        limitedOffer: false
    },
    {
        id: 2,
        price: '200',
        plan: '200',
        data: '13',
        dataPromotion: '26',
        dataType: 'Double national data',
        minutes: 400,
        minutePromotion: '',
        additions: [
            'No activation fee. Save AED 125',
            '15 GB free data on WiFi UAE',
            'Carry over data to next month'
        ],
        limitedOffer: true
    },
    {
        id: 3,
        price: '300',
        plan: '300',
        data: '25',
        dataPromotion: '50',
        dataType: 'Double national data',
        minutes: 1020,
        minutePromotion: '',
        additions: [
            'No activation fee. Save AED 125',
            '25 GB free data on WiFi UAE',
            'Carry over data to next month',
            'Amazon Prime on us',
            'Free Internet Calling Pack'
        ],
        limitedOffer: true
    },
    {
        id: 4,
        price: '500',
        plan: '500',
        data: '50',
        dataPromotion: '100',
        dataType: 'Double national data',
        minutes: 1500,
        minutePromotion: '',
        additions: [
            'No activation fee. Save AED 125',
            '100 GB free data on WiFi UAE',
            'Carry over data to next month',
            'Amazon Prime on us',
            'Free Internet Calling Pack',
            'Roaming 2 GB'
        ],
        limitedOffer: true
    }
    // {
    //     id: 5,
    //     price: '1000',
    //     plan: '1000',
    //     data: '120',
    //     dataPromotion: 'Unlimited',
    //     dataType: 'National data',
    //     minutes: 2500,
    //     minutePromotion: 'Unlimited',
    //     additions: [
    //         'No activation fee. Save AED 125',
    //         '120 GB free data on WiFi UAE',
    //         'Carry over data to next month',
    //         'Amazon Prime on us',
    //         'Free Internet Calling Pack',
    //         'Roaming 5 GB'
    //     ],
    //     limitedOffer: true
    // }
]
function Carousel() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) return <div></div>
    const handleDotClick = (page) => {
        setActivePage(page)
    }

    return (
        <div className="flex w-full flex-col">
            <div className="flex w-full items-start justify-start gap-6">
                {powerPlans.map(
                    (
                        {
                            id,
                            price,
                            plan,
                            data,
                            dataPromotion,
                            dataType,
                            minutes,
                            minutePromotion,
                            additions,
                            limitedOffer
                        },
                        index
                    ) => (
                        <div
                            key={index}
                            className="plan-border relative flex h-[650px] w-[310px] cursor-pointer flex-col items-start justify-between rounded-lg border-[1px] border-stone-200 bg-white py-3 pl-6 pr-5 text-center shadow-md hover:bg-stone-200"
                        >
                            <div>
                                <div className="w-full border-b-[1px] border-stone-300 pb-4 text-left">
                                    <h4 className="text-sm text-primaryColor">
                                        You Pay
                                    </h4>
                                    <h3 className="mb-[2px] text-sm text-primaryColor">
                                        <span className="text-xl font-bold">
                                            AED {price}
                                        </span>
                                        /month
                                    </h3>
                                    <p className="text-xs">
                                        For 12 months + 5% VAT
                                    </p>
                                </div>
                                <div className="w-full border-b-[1px] border-stone-300 pb-3 pt-3 text-left">
                                    <p className="text-sm text-secondaryColor">
                                        You Get
                                    </p>
                                    <h3 className="mb-[2px] text-xl font-bold tracking-[0.25px] text-secondaryColor">
                                        Power Plan {plan}
                                    </h3>
                                </div>

                                <div className="w-full border-b-[1px] border-stone-300 pb-3 pt-3 text-left">
                                    {dataPromotion !== '' ? (
                                        <p className="text-sm">
                                            <span className="relative pr-1 text-xl text-gray-300 after:absolute after:left-0 after:top-1/2 after:h-[1px] after:w-full after:rotate-[25deg] after:bg-gray-300">
                                                {data}
                                            </span>
                                            <span className="pr-2 text-xl font-bold text-black">
                                                {dataPromotion === 'Unlimited'
                                                    ? dataPromotion
                                                    : `${dataPromotion} GB`}
                                            </span>{' '}
                                            {dataType}
                                        </p>
                                    ) : (
                                        <p className="text-sm">
                                            <span className="pr-4 text-xl font-bold text-black">
                                                {data} GB
                                            </span>{' '}
                                            {dataType}
                                        </p>
                                    )}

                                    {minutePromotion !== '' ? (
                                        <p className="text-sm">
                                            <span className="relative pr-1 text-xl text-gray-300 after:absolute after:left-0 after:top-1/2 after:h-[1px] after:w-full after:rotate-[18deg] after:bg-gray-300">
                                                {minutes}
                                            </span>
                                            <span className="pr-4 text-xl font-bold text-black">
                                                {minutePromotion}
                                            </span>
                                            Flexi minutes
                                        </p>
                                    ) : (
                                        <p className="text-sm">
                                            <span className="pr-4 text-xl font-bold text-black">
                                                {minutes}
                                            </span>
                                            Flexi minutes
                                        </p>
                                    )}
                                </div>

                                <ul className="w-full pb-4 pt-3 text-left">
                                    {additions.map((addition, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center justify-start gap-1 pb-4 text-sm last:pb-0"
                                        >
                                            <Image
                                                src={Tick}
                                                alt="Tick"
                                                className="w-4"
                                            />
                                            {addition}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                {limitedOffer && (
                                    <div className="w-full border-t-[1px] border-stone-300 pb-4 pt-3 text-left">
                                        <p className="mb-1 mt-1 w-full max-w-[120px] rounded-lg bg-gradient-to-r from-[#652caa] via-[#c700b1] to-[#c700b1] px-1 pt-[1px] text-center text-xs text-white">
                                            Limited time offer
                                        </p>
                                        <p className="pt-1 text-sm">
                                            <span className="font-semibold">
                                                The Entertainer
                                            </span>{' '}
                                            on us for 12 months
                                        </p>
                                    </div>
                                )}
                                <div className="flex w-full items-center justify-between gap-2 border-t-[1px] border-stone-300 pt-3">
                                    <a
                                        href="#"
                                        className="text-sm text-black underline"
                                    >
                                        What you get
                                    </a>
                                    <button className="rounded-md border-[1px] border-stone-300 px-11 py-2 text-primaryColor transition ease-in-out hover:bg-primaryColor hover:text-white">
                                        Select
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
                {[...Array(2)].map((_, index) => (
                    <button
                        key={index}
                        className="mt-6 flex h-[10px] w-[10px] items-center justify-center rounded-full bg-primaryColor transition-all"
                    />
                ))}
            </div>
        </div>
    )
}

export default Carousel
