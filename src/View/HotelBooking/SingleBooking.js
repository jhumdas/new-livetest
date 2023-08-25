import React from 'react'

export default function SingleBooking() {
    return (
        <>

            <div className='topRedPartWrap'>

                <div className='container'>
                    <div className='topRedPart'>
                        <div>
                            <h6>AREA, LANDMARK OR PROPERTY NAME</h6>
                            <input type="text" placeholder='Search Hotel Name' />
                        </div>
                        <div>
                            <h6>CHECK IN</h6>
                            <input type="text" placeholder='DD-MM-YYYY' />
                        </div>
                        <div>
                            <h6>CHECK OUT</h6>
                            <input type="text" placeholder='DD-MM-YYYY' />
                        </div>
                        <div>
                            <h6>GUEST & ROOMS</h6>
                            <input type="text" placeholder='0 Adults. 0 Child. 0 Room' />
                        </div>
                        <div><a>Search</a></div>
                    </div>
                </div>
            </div>


            <div className='Singlehotel_details'>
                <div className='container'>
                    <h5>Hotel Regent Grand
                    <span>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        </span>
                        </h5>
                </div>
            </div>
        </>
    )
}
