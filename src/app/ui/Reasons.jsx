import React from 'react'
import Image from 'next/image'
import Idea from '@/../public/images/idea.svg'

function Reasons() {
    return (
        <section className="w-full border-b-[1px] border-stone-300 bg-stone-100 py-20">
            <div className="du_container flex items-start justify-center gap-6">
                <div className="flex items-start justify-start gap-3">
                    <Image src={Idea} alt="Idea" className="w-[38px]" />
                    <div>
                        <p className="pb-1 text-sm">3 reasons why</p>
                        <h3 className="text-lg font-semibold tracking-[0.15px]">
                            It's a bright idea <br />
                            to choose du.
                        </h3>
                    </div>
                </div>
                <div className="flex items-start justify-start gap-3">
                    <p className="text-[70px] font-[600] leading-[0.7] text-primaryColor opacity-10">
                        1
                    </p>
                    <div>
                        <h3 className="pb-1 text-base font-semibold">
                            The network you can trust
                        </h3>
                        <p className="text-sm leading-relaxed">
                            du&apos;s 4G and 5G mobile networks are <br />
                            unparalleled in coverage and uptime.
                        </p>
                    </div>
                </div>
                <div className="flex items-start justify-start gap-1">
                    <p className="text-[70px] font-[600] leading-[0.7] text-primaryColor opacity-10">
                        2
                    </p>
                    <div>
                        <h3 className="font-semibold">Worry-free contract</h3>
                        <p className="text-sm leading-relaxed">
                            If you&apos;re not satisfied with your new plan,
                            <br />
                            cancel with no obligation within 30 days.
                        </p>
                    </div>
                </div>
                <div className="flex items-start justify-start gap-1">
                    <p className="text-[70px] font-[600] leading-[0.7] text-primaryColor opacity-10">
                        3
                    </p>
                    <div>
                        <h3 className="font-semibold">
                            Know what you pay & what you get
                        </h3>
                        <p className="text-sm leading-relaxed">
                            We&apos;re transparent about your plan terms,
                            <br />
                            fees and cancellation.{' '}
                            <span className="font-[500] text-primaryColor underline">
                                Read the fine print.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reasons
