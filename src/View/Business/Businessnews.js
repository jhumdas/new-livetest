import React from 'react'

export default function Businessnews() {
    const loop = [1, 2, 3, 4, 5];
    return (
        <>
            {loop.map((item, index) => {
                return (
                    <div className='businessnews_main_pg mt-4 mb-4'>
                        <div className='business_main_txt_day mb-4'>
                            <div className='business_main_txt'>
                                <p className='business_main_txt_pp'>Lorem Ipsum</p>
                            </div>
                            <div className='business_main_day'>
                                <p className='business_main_txt_dd'>1 Day</p>
                            </div>
                        </div>
                        <div className='business_news_txt' style={{ borderBottom: "1px solid rgb(0 0 0 / 25%)" }}>
                            <p className='business_news_txt_ppp  mb-4'>
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,.....
                            </p>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
