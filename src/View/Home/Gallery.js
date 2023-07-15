import React from 'react'
import a from '../../images/Rectangle 42.png'
import b from '../../images/Rectangle 43.png'
export default function Gallery() {
    return (
        <>
            <section className='gallery'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-12'>
                            <div className='box'>
                                <img src={a} className='img-fluid'/>
                                <div className='Cnt'>
                                    <h3>Title here</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-12'>
                            <div className='box'>
                                <img src={b} className='img-fluid'/>
                                <div className='Cnt'>
                                    <h3>Title here</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
