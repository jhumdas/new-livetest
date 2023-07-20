import React from 'react'
import a from '../../images/Group 17.svg'
import b from '../../images/Group.svg'
import c from '../../images/iPhone 12 Pro Max.png'
import d from '../../images/iPhone 12 Pro Max2.png'
export default function Application() {
    return (
        <>

            <section className='application'>
                <div className='container'>
                    <div className='img'>
                        <div className='left'>

                            <div  className='leftImg'><img src={c} className='w-100' /></div>
                            <div style={{ marginTop: "auto" }} className='rgtImg'><img src={d} className='w-100' /></div>

                        </div>
                        <div className='right wrap mt-4'>
                            <h3>Download Our<br /> Application Now</h3>
                            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                            <div className='mt-4'>
                                <a href="#"><img src={a} /></a>
                                <a href="#"><img src={b} /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
