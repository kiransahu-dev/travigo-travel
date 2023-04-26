import React from 'react'

const PriceCard = ({ plan: { planicon, title, text, plantype, plancontent, buttonText } }) => {
    return (
        <>
            <div className='p-5 rounded-lg bg-slate-50/5 ring-1 ring-slate-300 shadow-md shadow-slate-400 hover:scale-110 duration-300 transition-all cup'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-5'>
                        <div className='grid items-center'>
                            <img src={planicon} alt='planicon/img' className='w-14 h-14 lg:h-12 lg:w-12 object-cover' />
                        </div>
                        <div className='grid items-center'>
                            <h1 className='text-gray-900 font-semibold text-lg filter drop-shadow-lg lg:text-base md:text-sm'>{title}</h1>
                            <p className='text-slate-900 font-normal text-sm lg:text-xs'>{text}</p>
                        </div>
                    </div>
                    <div className='grid items-center'>
                        <h1 className='text-gray-900 font-bold text-lg filter drop-shadow-lg lg:text-base md:text-sm'>{plantype}</h1>
                    </div>
                </div>
                <div className='h-[0.1vh] bg-slate-300 my-5'></div>
                <div className='grid items-center gap-3 px-5 '>
                    {plancontent?.map((val, i) => (
                        <div key={i} className='flex itc justify-start gap-5'>
                            <div className='grid items-center'>
                                <img src={val.iconbox} alt='icon/svg' className='lg:w-5 lg:h-5' />
                            </div>
                            <div className='grid items-center'>
                                <h1 className='font-normal text-lg text-gray-900 drop-shadow-lg lg:text-base hover:text-emerald-500'>{val.text}</h1>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='grid itc justify-items-center mt-7 text-base'>
                    <button type='button' className='button-emrald'>{buttonText}</button>
                </div>
            </div>
        </>
    )
}

export default PriceCard;
