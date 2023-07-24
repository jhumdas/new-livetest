import React from 'react'
import ProfileBox from '../../Component/ProfileBox'
import OrderAccount from '../../Component/OrderAccount'

export default function Index() {
    return (
        <>
            <section className='ManageAddress'>
                <div className='container'>
                    <ProfileBox />
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <OrderAccount />
                        </div>
                        <div className='col-lg-8 col-md-8 col-12'>
                            <div className='address'>

                                <input
                                    className="form-check-input input-radio on"
                                    type="radio"
                                    name="exampleRadios"
                                    id="exampleRadios1"
                                    defaultValue="option1"
                                    defaultChecked=""
                                />
                                <label className="form-check-label pl-2" htmlFor="exampleRadios1">
                                    <strong>Lorem Ipsum</strong>
                                    <p style={{ fontSize: "14px" }}>131 N Roadrunner Pkwy, Las Cruces, New York, USA</p>
                                </label>


                            </div>
                            <a href="#" className="AddressBtn mt-3">
                                Add Address
                            </a>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
